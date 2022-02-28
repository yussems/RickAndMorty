import React from 'react'

function Card({item}) {
    const {name,status,species,image} = item
    console.log(species);
  return (
    <div>Card</div>
  )
}

export default Card