import { useState } from "react"

import { useDispatch, useSelector} from 'react-redux'

import {
  add, sub, mult, div
} from '../redux/calcSlice'


const Calc = () => {
  const[input1, setInput1] = useState(0);
  const[input2, setInput2] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector(state => state.calc)

  return(
    <>
    Input 1:
    <input onChange={ e => setInput1(e.target.value)}/>
    Input 2:
    <input onChange={ e => setInput2(e.target.value)}/>
    <br/>
    <button onClick={() => dispatch( add( input1, input2 ))}>
      +
    </button>
    <button onClick={() => dispatch( div( input1, input2 ))}>
      /
    </button>
    <button onClick={() => dispatch( mult( input1, input2))}>
      X
    </button>
    <button onClick={() => dispatch( sub( input1, input2))}>
      -
    </button>
    Result : { result.total }
    </>
  )

}

export default Calc;