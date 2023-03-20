import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [result,setResult]=useState("")

  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const clear=()=>{
    setResult("")
  }
  const backspace=()=>{
    //rsult.length -1 or -1
    setResult(result.slice(0,-1));
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error")
    }
  }
  return (
    <div>
      <span className='head'>Scientific Calculator</span>
      <div className='calculator-container'>
        <form>
          <input type="text" value={result} />
        </form>
        <div className='keypad-container'>
          <button onClick={clear} id="clear" className='highlight'>AC</button>
          <button onClick={backspace} id="backspace" className='highlight'>DEL</button>
          <button name="%"  onClick={handleClick}>%</button>
          <button name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          {/* <button name="." onClick={handleClick}>+/-</button> */}
          <button onClick={calculate} className=" calculate">=</button>
        </div>
      </div>
      <div className='bubbles'>
          <span className='one s'>+</span>
          <span className='two s'>/</span>
          <span className='three s'>^</span>
          <span className='four s'>*</span>
          <span className='five s' style={{visibility:"hidden"}}></span>
          <span className='six s' style={{visibility:"hidden"}}></span>
          <span className='seven s'>x</span>
          <span className='eight s'>=</span>
          <span className='nine s'>%</span>
          <span className='ten s'>-</span>
      </div>
    </div>
  )
}

export default App