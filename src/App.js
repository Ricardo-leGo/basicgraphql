import React from 'react';
import { querySpace } from './services/gql'
import { useQuery } from '@apollo/react-hooks';
import './index.css'

const App = () => {
    
  const { data } = useQuery(querySpace);
  console.log(data);
  
  return (
    <>
      {data && data.launchesPast.map(
        (el, i) => (
          <div key={i} className="card-container">
            <span>{i+1}</span>
            <h1>{el.mission_name}</h1>

            {el.ships && el.ships.map((eme, j) =>
              <div key={j}>

                <h3>     {eme.name}   </h3>
                <img src={eme.image}  alt="No se puede visualizar" />

              </div>)}
            
          </div>
        ))}
    </>
  );
}

export default App;