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
    const { onIngredientModified } = props
    return (
        <div className={styles.buildControls}>
            {controls.map(control => (
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    modified={onIngredientModified.bind(this, control.type)} 
                />
            ))}
        </div>
    )
}

export default buildControls