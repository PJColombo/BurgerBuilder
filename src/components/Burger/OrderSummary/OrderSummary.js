import React, { Fragment } from 'react'

const OrderSummary = props => {
    const { ingredients } = props
    console.log(ingredients)
    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => {
            return (
                <li>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
                </li>
            )
        })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Fragment>
    )
}

export default OrderSummary