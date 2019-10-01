import React from 'react'

//burgerLogo sera inicializado con un string que contiene la ruta donde webpack meterá la image cuando construya
// el proyecto.
import burgerLogo from '../../assets/images/burger-logo.png'

import styles from './Logo.module.css'

const logo = (props) => (
    <div className={styles.Logo} /*style={{height: props.height}}*/>
        <img src={burgerLogo} alt="My burger" />
    </div>
)

export default logo
