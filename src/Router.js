import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';


const first = () => {return <h1>hello My darling </h1>}

export const Routes = () => (
    <>
        <Switch>
            <Route exact path="/pagina" component={first}/>
            <Route exact path="/page" component={App}/>
        </Switch>
    </>
)