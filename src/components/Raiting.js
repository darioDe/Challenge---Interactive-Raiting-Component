import React, { useState } from 'react'


const Raiting = ({number, setNumber}) => {

const handlerSetNumber = ()=> {
  setNumber(number)
}

  return (
    <>
     <button onClick={handlerSetNumber} > {number}  </button>
   </>
  )
}

export default Raiting