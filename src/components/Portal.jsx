import { useState } from "react";

const Portal = () => {

    const[inputValue, setInputValue] = useState("")
    const[copied,setCopied]=useState(false)

    const handleCopy = () => {
      navigator.clipboard.writeText(inputValue).then(() => {
        setCopied(true)
        setTimeout(() => setCopied,5000)
      })
    }

  return (
    <div>
      <center>
        <h1>PORTAL</h1>
        <input type="text" 
        value={inputValue}
        onChange={e =>setInputValue(e.target.value) }
        />
        <button onClick={handleCopy}>Copy</button>
      </center>
      </div>
  )
}

export default Portal