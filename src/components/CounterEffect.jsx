import { useEffect, useState } from "react";

const CounterEffect = () => {

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log("incremented");
    document.title=`Increment ${counter}`
  },[counter])

    return (
    <div>
        <center>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter((counter+1)) }>Inc</button>
        </center>
    </div>
  )
}

export default CounterEffect