import React, {Fragment} from 'react'

import styles from './Layout.module.css'

const layout = props => (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
    </Fragment>
)

export default layout
 