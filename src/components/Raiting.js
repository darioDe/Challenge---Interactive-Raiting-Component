import React, { useState, useRef } from 'react'
import './Raiting.css'


const Raiting = ({ number, setNumber }) => {

  // ARRAY TO NUMBERS BUTTON
  const nums = [1,2,3,4,5];
  // STATES TO CHANGE COLOR
  const [colorBtn1, setColorBtn1] = useState(false);
  const [colorBtn2, setColorBtn2] = useState(false);
  const [colorBtn3, setColorBtn3] = useState(false);
  const [colorBtn4, setColorBtn4] = useState(false);
  const [colorBtn5, setColorBtn5] = useState(false)
  // REFERENCE FOR EACH BUTTONS
  const refBtn1 = useRef()
  const refBtn2 = useRef()
  const refBtn3 = useRef()
  const refBtn4 = useRef()
  const refBtn5 = useRef()
  
  // FUNCTION TO CHANGE STYLE COLOR & STATES
  const handleSetColor = (e) => {

    if (e.target.id == nums[0]) {
      setColorBtn1(!colorBtn1)
      setColorBtn2(false);
      setColorBtn3(false);
      setColorBtn4(false);
      setColorBtn5(false);
      refBtn1.current.classList.toggle('button-raiting-active', true);
      refBtn2.current.classList.toggle('button-raiting-active', false);
      refBtn3.current.classList.toggle('button-raiting-active', false);
      refBtn4.current.classList.toggle('button-raiting-active', false);
      refBtn5.current.classList.toggle('button-raiting-active', false);
    }

    else if (e.target.id == nums[1]) {
      setColorBtn1(false);
      setColorBtn2(!colorBtn2)
      setColorBtn3(false);
      setColorBtn4(false);
      setColorBtn5(false);
      refBtn1.current.classList.toggle('button-raiting-active', false);
      refBtn2.current.classList.toggle('button-raiting-active', true);
      refBtn3.current.classList.toggle('button-raiting-active', false);
      refBtn4.current.classList.toggle('button-raiting-active', false);
      refBtn5.current.classList.toggle('button-raiting-active', false);
    }

    else if (e.target.id == nums[2]) {
      setColorBtn1(false);
      setColorBtn2(false);
      setColorBtn3(!colorBtn3)
      setColorBtn4(false);
      setColorBtn5(false);
      refBtn1.current.classList.toggle('button-raiting-active', false);
      refBtn2.current.classList.toggle('button-raiting-active', false);
      refBtn3.current.classList.toggle('button-raiting-active', true);
      refBtn4.current.classList.toggle('button-raiting-active', false);
      refBtn5.current.classList.toggle('button-raiting-active', false);
    }

    else if (e.target.id == nums[3]) {
      setColorBtn1(false);
      setColorBtn2(false);
      setColorBtn3(false);
      setColorBtn4(!colorBtn4)
      setColorBtn5(false);
      refBtn1.current.classList.toggle('button-raiting-active', false);
      refBtn2.current.classList.toggle('button-raiting-active', false);
      refBtn3.current.classList.toggle('button-raiting-active', false);
      refBtn4.current.classList.toggle('button-raiting-active', true);
      refBtn5.current.classList.toggle('button-raiting-active', false);
    }

    else if (e.target.id == nums[4]) {
      setColorBtn1(false);
      setColorBtn2(false);
      setColorBtn3(false);
      setColorBtn4(false);
      setColorBtn5(!colorBtn5)
      refBtn1.current.classList.toggle('button-raiting-active', false);
      refBtn2.current.classList.toggle('button-raiting-active', false);
      refBtn3.current.classList.toggle('button-raiting-active', false);
      refBtn4.current.classList.toggle('button-raiting-active', false);
      refBtn5.current.classList.toggle('button-raiting-active', true);
    }
  }

  // FUNCTION ONCLICK TO EXECUTE ANOTHER FUNCTIONS
  const handlerSetNumber = (e)=> {  
    handleSetColor(e);
    setNumber(e.target.id)
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