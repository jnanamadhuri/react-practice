import { useState } from "react"
const LorDmode = () => {
    const [mode,setMode]= useState(false)
  return (
    <div>
        {mode?(
        <span>Dark</span>

   ):(
       <span>Light</span>
   )
   }

    <br />

    <input type="text"
    className="mode"
    key={mode? "dark": "light"}
    />
    <button onClick={()=> setMode((m) => !m)}>Switch</button>
    </div>
  )
}
export default LorDmode