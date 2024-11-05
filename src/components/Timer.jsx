import {useState} from 'react'
const Timer = () => {

    const [count,setCount] = useState(0)

    const Increment =() => setCount(count+1)

    const Decrement =() => setCount(count-1)

  return (
    <div className="exercise1">
        <h1>COUNTER</h1>
        <h1>{count}</h1>
        <button onClick={Increment}>INC</button>
        <button onClick={Decrement}>DEC</button>
    </div>
  )
}

export default Timer;