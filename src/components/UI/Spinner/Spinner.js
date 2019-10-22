import React from 'react'

import styles from './Spinner.module.css'

const Spinner = (props) => (
    <div className={styles.modalSpinner}>
        <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default Spinner