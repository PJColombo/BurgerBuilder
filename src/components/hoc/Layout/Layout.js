import React, {Component, Fragment} from 'react'

import Toolbar from '../../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'

import styles from './Layout.module.css'

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerOpenedHandler = () => {
        this.setState({showSideDrawer: true})
    }
    render () {
        const { sideDrawerClosedHandler, sideDrawerOpenedHandler } = this
        const { showSideDrawer } = this.state
        return (
            <Fragment>
                <Toolbar showMenu={showSideDrawer} openMenu={sideDrawerOpenedHandler} />
                <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout
