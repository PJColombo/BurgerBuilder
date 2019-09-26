import React from 'react'

//burgerLogo sera inicializado con un string que contiene la ruta donde webpack meterá la image cuando construya
// el proyecto.
import burgerLogo from '../../assets/images/burger-logo.png'

import styles from './Logo.module.css'

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="My burger" />
    </div>
)

export default logo
