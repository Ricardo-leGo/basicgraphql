import React              from 'react';
import ReactDOM           from 'react-dom';
import { BrowserRouter }  from 'react-router-dom'
import ApolloClient       from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from './context';
import { Routes } from './Router';
import * as serviceWorker from './serviceWorker';



const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
})

function Contexto() {
  return (
    <BrowserRouter>
      <ApolloProvider client = { client }>
        <Provider>
          <Routes/>
        </Provider>
      </ApolloProvider>
</BrowserRouter>
  )
}

ReactDOM.render(
<Contexto/>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
