import React from 'react'

import styles from './Burger.module.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
    const { ingredients } = props
    let transformedIngredients = Object.keys(ingredients)
        .map(igKey => {
            return [...Array(ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if(!transformedIngredients.length)
        transformedIngredients = <p>Please start adding ingredients!</p>
    return (
        <div className={styles.burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger