import { useEffect, useState } from "react";

const FetchDataEffect = () => {

   const[Data,setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const Data = await response.json();
      if(Data && Data.length) setData(Data);
    }
    getData();
  },[])

  return (
    <div>FetchDataEffect
      <ul>
        {Data.map((f) => (
          <li key={Math.random()}>{f.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchDataEffect