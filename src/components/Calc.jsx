import { useState } from "react"




const Calc = () => {
  const[input1, setInput1] = useState(0);
  const[input2, setInput2] = useState(0);

  return(
    <>
    Input 1:
    < onChange={ e => setInput1(e.target.value)}/>
    Input 2:
    <input onChange={ e => setInput2(e.target.value)}/>
    <br/>
    <button onClick={() => dispatch( add( input1, input2 ))}>
      +
    </button>
    <button onClick={() => dispatch( div( input1, input2 ))}>
      /
    </button>
    </>
  )

}