import React, { Component, Fragment} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}
const INITIAL_STATE = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0,
    },
    totalPrice: 0,
    purchaseable: false,
    purchasing: false,
}

class BurgerBuilder extends Component {

    state = INITIAL_STATE

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

    purchaseContinueHandler = () => {
        alert("continue")
    }

    render() {
        const { ingredients, totalPrice, purchaseable, purchasing } = this.state
        const { modifyIngredientHandler, purchaseHandler, purchaseCancelHandler, purchaseContinueHandler } = this
        let disabledInfo =  {
            ...ingredients
        }

        for(let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0

        return (
            <Fragment>
                <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={ingredients}
                        purchaseCancelled={purchaseCancelHandler}
                        purchaseContinue={purchaseContinueHandler} 
                        price={totalPrice}
                    />
                </Modal>
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
    }
}

export default BurgerBuilder

