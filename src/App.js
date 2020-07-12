/* eslint-disable array-callback-return */
import React, { useState, useEffect} from 'react';
import { querySpace } from './services/gql'
import { useQuery } from '@apollo/react-hooks';
import { keyframes, anim } from './animationKeyframe'
import './index.css'

const App = () => {
  let count = 0,
    pages = 0,
    auxiliar;    

  
  document.styleSheets[0].insertRule(keyframes);

  const { loading, error, data } = useQuery(querySpace);

  return (
    <>
      {
        loading ? <h1 style={anim}>
          Loading...
          </h1> :
          data.launchesPast.map((el, i) => (
            <div key={i}>
              <p >name :{el.mission_name} </p>
              <p>payload: {el.rocket.second_stage.payloads[0].payload_type}</p>
            </div>
          )
        )
      }
      <div className="btns">
        {data && data.launchesPast.map((el, i) => {
          count++
          if (count < (Math.floor(data.launchesPast.length) + 1) / 3)
      
            return <button key={i}>{count}</button>
          
          })
      }
      </div>
    </>
    )
}

export default App;