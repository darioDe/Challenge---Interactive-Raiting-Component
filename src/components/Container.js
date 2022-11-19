import React, { useState, forwardRef } from 'react'
import star from '../assets/img/icon-star.svg'
import Raiting from './Raiting'
import Submit from './Submit'
import SubmitedState from './SubmitedState'
import './Container.css';



const Container = () => {

 const [number, setNumber] = useState(0);
 const [activeRaiting, setActiveRaiting] = useState(false);

 

 if (activeRaiting){
  return (
    <div>
      <SubmitedState number={ number } />
    </div>
  )
 }
 
 return (
    <div className='submited'>
       <div className='cont-submited'>
          <div className='star-box' >
            <img src={star} alt="" />
          </div>
          <h1> How did we do? </h1>
          <p> Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering! </p>
          <div className='raiting-box'>
            {/* NUMBERS BUTTON */}
            <Raiting setNumber={setNumber} number={number} />
          </div>
            {/* BUTTON TO SUBMIT  */}
          <Submit number={number} activeRaiting={activeRaiting} setActiveRaiting={setActiveRaiting} />
       </div>
    </div>
  )
}

export default Container