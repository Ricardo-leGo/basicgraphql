
import React, { createContext, Component } from 'react';
import { whitRouter } from 'react-router-dom';



export const context = createContext();


class Provider extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    state = {
        a: [],
        b: {}
    }

    render() {
        const { state } = this;
        return (
            <context.Provider 
                value={{

                }}>
                
            </context.Provider>
        )
    }
}