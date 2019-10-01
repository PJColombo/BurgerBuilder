import React from 'react'

import styles from './MenuButton.module.css'
import menuIconPath from "../../../../assets/images/icon-menu.png";

const MenuButton = (props) => {
    return (
        <div className={styles.MenuButton} onClick={props.openMenu}>
            <img src={menuIconPath} alt="Menu Icon"/>
        </div>
    )
}

export default MenuButton
