import React, { Component, Fragment } from 'react'

import Modal from '../../UI/Modal/Modal'

const INITIAL_STATE = {
    error: null,
}
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        
        state = INITIAL_STATE

        componentDidMount = () => {
            console.log("[ERROR HANDLER] componentDidMount")
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error : null });

                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error })
            })
        }

        componentWillUnmount = () => {
            console.log("[ERROR HANDLING] componentWillUnmount")
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.resInterceptor)
        }
        errorConfirmHandler = () => {
            this.setState({ error: null })
        }

        render() {
            const { errorConfirmHandler } = this
            const { error } = this.state

            return (
                <Fragment>
                    <Modal 
                    show={error}
                    modalClosed={errorConfirmHandler}
                    >
                        {error ? error.message : null}
                    </Modal>
                    <WrappedComponent { ...this.props} />
                </Fragment>
            )
        }
    }
}

export default withErrorHandler