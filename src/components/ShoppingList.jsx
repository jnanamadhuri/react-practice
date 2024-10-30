import { useState } from "react";
const ShoppingList = () => {

  const [list,setList] = useState([]);
  const [name,setName] = useState("");
  const [quantity,setQuantity] = useState();

  const handleSubmit =(e) =>{
    e.preventDefault()

    if(!name||!quantity) return;

    const newItem  ={
        name,
        quantity:parseInt(quantity),
    }

    setList((prevList) => [...prevList,newItem]);
    setName("");
    setQuantity("");
  }

  return (
    <div>
        <center>
            <h1>SHOPPING LIST</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e)=>setName(e.target.value) }
                 />
                 <input
                type="number"
                placeholder="Item quantity"
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value) }
                 />
                 <button type="submit">add item</button>
            </form>
            <ul>
                {list.map((item, index)=> (
                    <li key={index}>{item.name}-{item.quantity}</li>
                ))}
            </ul>
        </center>
    </div>
  )
}

export default ShoppingList