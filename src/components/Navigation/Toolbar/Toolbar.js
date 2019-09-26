import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'

import styles from './Toolbar.module.css'

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar
