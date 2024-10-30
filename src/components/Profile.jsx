import React,{useState} from 'react'

const Profile = () => {
    const [state, setState] = useState({
        name: "vinod",
        age: 17
    }
    )
    const [inputValue, setInputValue] = useState({
        name:"",
        age:""
    }
    )

const handleUpdate =() =>{
    setState({name:inputValue.name,age:inputValue.age})
    setInputValue({ name: "", age: "" }); 
}
  return (
    <div>
        <center>
            <h1>PROFILE</h1>
            <h3>NAME:{state.name}</h3>
            <h3>AGE:{state.age}</h3>

            <input 
            type="text"
            value={inputValue.name}
            onChange={(e) => setInputValue( {...inputValue, name:e.target.value})}
            placeholder='update name'
             />
             <input 
            type="number"
            value={inputValue.age}
            onChange={(e) => setInputValue({...inputValue, age:e.target.value})}
            placeholder='update age'
             />
            <button onClick={handleUpdate}>Update</button>
        </center>
    </div>
  )
}

export default Profile