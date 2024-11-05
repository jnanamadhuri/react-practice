import React, {useState} from 'react'

const ToDoList = () => {
  const [array,setArray]= useState([]);
  const [inputValue,setInputValue]= useState("");

  const handleChange = (e) =>{
    setInputValue(e.target.value)
  };
  
  const handleSave =(e) => {
    e.preventDefault();
    if(inputValue.trim()){
        setArray([...array,inputValue])
        setInputValue("");
    }
  };

  

  return (
    <div className="ToDoList">
        <h1><center>
            TO DO LIST
        </center></h1>

        <form onSubmit={handleSave}>
        <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder='ENTER YOUR WORK'
        />
        <button type="submit">Submit</button>
        </form>
        <ul>
            {array.map((arr ,index)=> (
                <li key={index}>{arr}</li>
            ))}
        </ul>
    </div>
  );
};

export default ToDoList;