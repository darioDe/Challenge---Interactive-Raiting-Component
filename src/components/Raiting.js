import React, { useState, useRef } from 'react'
import './Raiting.css'


const Raiting = ({ number, setNumber }) => {

  const refBtn1 = useRef()
  const refBtn2 = useRef()
  const refBtn3 = useRef()
  const refBtn4 = useRef()
  const refBtn5 = useRef()
  const nums = [1,2,3,4,5];
  const [color, setColor] = useState(false);

  
const handleSetColor = (e) => {

  if (e.target.id !== 0) {
    setColor(true);
    e.target.classList.toggle("button-raiting-active")  
    console.log(refBtn1)
    console.log(e.target.ref)
  }


  
}

const handlerSetNumber = (e)=> {  
  setNumber(e.target.id);
  handleSetColor(e)
}

  return (
    <>
     <button className='button-raiting' id={nums[0]} onClick={handlerSetNumber} ref={refBtn1} > {nums[0]} </button>
     <button className='button-raiting' id={nums[1]} onClick={handlerSetNumber} ref={refBtn2} > {nums[1]} </button>
     <button className='button-raiting' id={nums[2]} onClick={handlerSetNumber} ref={refBtn3} > {nums[2]} </button>
     <button className='button-raiting' id={nums[3]} onClick={handlerSetNumber} ref={refBtn4} > {nums[3]} </button>
     <button className='button-raiting' id={nums[4]} onClick={handlerSetNumber} ref={refBtn5} > {nums[4]} </button>
   </>
  )
}
export default Raiting