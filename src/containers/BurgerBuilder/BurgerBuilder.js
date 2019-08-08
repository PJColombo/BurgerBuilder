import React, { Component, Fragment} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}
const INITIAL_STATE = {
    ingredients: {
        salad: 1,
        bacon: 2,
        meat: 2,
        cheese: 1,
    },
    totalPrice: 4,
    purchaseable: false,
}

class BurgerBuilder extends Component {

    state = INITIAL_STATE

    updatePurchaseState = () => {
        
    }

    modifyIngredientHandler = (type, addIngredient) => {
        this.setState((prevState) => {
            let ingredients = {...prevState.ingredients},
                totalPrice = prevState.totalPrice
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
            return {
                ingredients,
                totalPrice,
            }
        })
    }

    render() {
        const { ingredients, totalPrice } = this.state
        const { modifyIngredientHandler } = this

        let disabledInfo =  {
            ...ingredients
        }
        for(let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0
        return (
            <Fragment>
                <Burger ingredients={ingredients} />
                <BuildControls 
                    onIngredientModified={modifyIngredientHandler}
                    price={totalPrice}
                />
            </Fragment>
        )
    }
}

export default BurgerBuilder

