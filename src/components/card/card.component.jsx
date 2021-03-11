import React from 'react';
import './card.style.css'

export const Cards = (props) =>(
     <div className='card-container'>
          <img alt ='Monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
          <h2>{props.monster.name}</h2>
          <p>{props.monster.email}</p>
          <p>{props.monster.company.catchPhrase}</p>
     </div>
)
