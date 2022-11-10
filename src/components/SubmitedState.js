import React from 'react'
import thankyou from '../assets/img/illustration-thank-you.svg'

const SubmitedState = ({number}) => {
  return (
    <div>
      <p>You selected {number} out of 5</p>
     <img src={thankyou} alt="" />
     <h1> Thank you! </h1>
     <p> We appreciate you taking the time to give a rating. If you ever need more support, 
     don't hesitate to get in touch! </p>
    </div>
  )
}

export default SubmitedState