import React, { useState } from 'react'
import star from '../assets/img/icon-star.svg'
import Raiting from './Raiting'
import Submit from './Submit'
import SubmitedState from './SubmitedState'


const Container = () => {

 const [number, setNumber] = useState(0);
 const [activeRaiting, setActiveRaiting] = useState(false);

 if (activeRaiting){
  return (
    <div>
      <SubmitedState number={number} />
    </div>
  )
 }

  return (
    <div>
       <img src={star} alt="" />
       <h1> How did we do? </h1>
       <p> Please let us know how we did with your support request. All feedback is appreciated 
       to help us improve our offering! </p>
       <Raiting setNumber={setNumber} number={1} />
       <Raiting setNumber={setNumber} number={2} />
       <Raiting setNumber={setNumber} number={3} />
       <Raiting setNumber={setNumber} number={4} />
       <Raiting setNumber={setNumber} number={5} />
       <Submit number={number} activeRaiting={activeRaiting} setActiveRaiting={setActiveRaiting}  />
    </div>
  )
}

export default Container