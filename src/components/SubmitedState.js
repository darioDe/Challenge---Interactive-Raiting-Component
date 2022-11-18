import React from 'react'
import thankyou from '../assets/img/illustration-thank-you.svg'
import './SubmitedState.css'
import './Container.css'

const SubmitedState = ({number}) => {
  return (
    <div className='submited'>
     <div className='cont-submited center' >
        <img className='img-thankyou' src={thankyou} alt="" />
        <p className='selected-paragraph'>You selected {number} out of 5</p>
        <h1> Thank you! </h1>
        <p> We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch! </p>
     </div>
    </div>
  )
}

export default SubmitedState