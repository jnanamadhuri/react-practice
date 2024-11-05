// import {useState,useEffect} from 'react'

// const UseEffect = () => {
//     const[value,setValue]=useState(0)
//     useEffect(() => {
//         console.log("using useEffect prop")
//         document.title = `Increment ${value}`
//     },[]);

//   return (
//     <div>
//         <h1>{value}</h1>
//         <button onClick={()=>setValue(value+1)}>Inc</button>
//     </div>
//   )
// }

// export default UseEffect


import {useState,useEffect} from 'react';

const UseEffect = () => {

    const [data,setData]=useState([]);

    useEffect(() => {
        async function getData() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        )
        const data = await response.json()
        if (data && data.length) setData(data)
        }

        getData();
    },[])

  return (
    <div>fetching
        <ul>
            {data.map((item) => (
                <li key={Math.random()}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseEffect