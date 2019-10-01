import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import MenuButton from '../SideDrawer/MenuButton/MenuButton'

import styles from './Toolbar.module.css'

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <MenuButton show={props.showMenu} openMenu={props.openMenu}/>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar
