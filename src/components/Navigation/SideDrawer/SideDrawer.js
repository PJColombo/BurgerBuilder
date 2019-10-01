import React, {Fragment} from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import styles from './SideDrawer.module.css'

const sideDrawer = (props) => {
    //Implementing dynamicaly assigned classes.
    let attachedClasses = [styles.SideDrawer, styles.Close]
    if(props.open)
        attachedClasses = [styles.SideDrawer, styles.Open]

    return (
        <Fragment>
            <Backdrop show={props.open}  clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo /*height={"11%"}*/ />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default sideDrawer

