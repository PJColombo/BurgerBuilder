import React from 'react'

import styles from './BuildControl.module.css'


const buildControl = props => {
    const { label, modified, disabled } = props
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{label}</div>
            <button className={styles.Less} onClick={modified.bind(this, false)} disabled={disabled}>Less</button>
            <button className={styles.More} onClick={modified.bind(this, true)}>More</button>
        </div>
    )
}

export default buildControl