import React from 'react'

import styles from './BuildControls.module.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
]
const buildControls = props => {
    const { price, purchaseable,  disabled} = props
    const { onIngredientModified } = props
    return (
        <div className={styles.buildControls}>
            <p>Current Price: <strong>{price}</strong></p>
            {controls.map(control => (
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    modified={onIngredientModified.bind(this, control.type)}
                    disabled={disabled[control.type]}
                />
            ))}
            <button 
                className={styles.OrderButton}
                disabled={!purchaseable}
            >
                ORDER NOW
            </button>
        </div>
    )
}

export default buildControls