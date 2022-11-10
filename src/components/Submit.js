import React, { useState } from 'react'

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
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Submit