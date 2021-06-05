import React, { Component } from 'react'

import MyContext from './MyContext';

export default class MyProvider extends Component {
    state = {
        loading: false,
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    loading: this.state.loading,
                    onLoading: val => {
                        this.setState({loading: true})
                    },
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
