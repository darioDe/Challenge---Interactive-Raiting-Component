import React, { useState } from 'react'
import './Submit.css'

const Submit = ({number, setActiveRaiting, activeRaiting}) => {

  const handleSubmit = () => {
    if (number > 0){
      return setActiveRaiting(true);
    } else {
      alert("please")
    }
  }

  return (
    <div>
      <button className='button-submit' onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Submit