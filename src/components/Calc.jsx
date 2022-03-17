import { useState } from "react"

import { useDispatch, useSelector} from 'react-redux'

import {
  add, sub, mult, div
} from '../redux/calcSlice'

import './Calc.css'

const Calc = () => {
  const[input1, setInput1] = useState(0);
  const[input2, setInput2] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector(state => state.calc)

  return(
    <>
    <div className="container">
    Input 1:
      <input onChange={ e => setInput1(Number(e.target.value))} />
      <br />
      Input 2:
      <input onChange={ e => setInput2(Number(e.target.value))} />
      <br/>
      <br/>
      <button onClick={() => dispatch( add( {input1, input2} ))}>
        +
      </button>
      <button onClick={() => dispatch( div( {input1, input2} ))}>
        /
      </button>
      <button onClick={() => dispatch( mult( {input1, input2} ))}>
        X
      </button>
      <button onClick={() => dispatch( sub( {input1, input2} ))}>
        -
      </button>
      <br />
      Result : { result.total }
    </div>
    </>
  )

}

export default Calc;