import React, { Component, Fragment} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../components/hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'
import { async } from 'q'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}
const INITIAL_STATE = {
    ingredients: null,
    totalPrice: 0,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
}

class BurgerBuilder extends Component {

    state = INITIAL_STATE

    constructor(props) {
        super(props)
        console.log("[BURGER BUILDER] constructor")
        this.loadIngredients()
    }
    
    componentDidMount = () => {
        console.log("[BURGER BUILDER] componentDidMount")
    }
    loadIngredients = async () => {
        try {
            const res = await axios.get("https://burger-builder-98f97.firebaseio.com/ingredients.json")
            console.log(res)
            this.setState({ingredients: res.data})
        } catch (err) {
            this.setState({ error: true })
            console.error(err)
        }
    }

    updatePurchaseState = (updateIngredients) => {
        const ingredients = {
            ...updateIngredients,
        }
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        this.setState({purchaseable: sum > 0})
    }

    modifyIngredientHandler = (type, addIngredient) => {
        let ingredients = {...this.state.ingredients},
                totalPrice = this.state.totalPrice
            if (addIngredient) {
                ingredients[type]++;
                totalPrice += INGREDIENT_PRICES[type]
            }
            else {
                if (ingredients[type] > 0) {
                    ingredients[type]--;
                    totalPrice -= INGREDIENT_PRICES[type]
                }
            }

            //Set two decimals only
            totalPrice =+ totalPrice.toFixed(2)
        this.setState({ingredients, totalPrice})
        this.updatePurchaseState(ingredients)
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = async () => {
        this.setState({ loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Paulo",
                address: {
                    street: "test street",
                    zipCode: "41123",
                    country: "Spain"
                },
                email: "test@test.com",
            },
            deliveryMethod: "fastest"
        }
        try {
            const res = await axios.post('/orders.json', order)
            this.setState({ loading: false, purchasing: false })
            console.log(res);
        } catch(err) {
            console.error(err)
        }

    }

    render() {
        const { ingredients, totalPrice, purchaseable, purchasing, loading, error } = this.state
        const { modifyIngredientHandler, purchaseHandler, purchaseCancelHandler, purchaseContinueHandler } = this
        let disabledInfo =  {
            ...ingredients
        }
        let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner/> 
        let orderSummary = null

        for (let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0
            
        if (ingredients) {
            burger = (
                <Fragment>
                    <Burger ingredients={ingredients} />
                    <BuildControls 
                        onIngredientModified={modifyIngredientHandler}
                        price={totalPrice}
                        disabled={disabledInfo}
                        purchaseable={purchaseable}
                        ordered={purchaseHandler}
                    />
                </Fragment>
            )
            orderSummary = <OrderSummary
                ingredients={ingredients}
                purchaseCancelled={purchaseCancelHandler}
                purchaseContinue={purchaseContinueHandler} 
                price={totalPrice}
                /> 
        }

        

        if (loading)
            orderSummary = <Spinner />

        
        return (
            <Fragment>
                <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)

