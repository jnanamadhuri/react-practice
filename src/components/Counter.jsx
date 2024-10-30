// import  {useState} from 'react'

// export const Counter = () => {

//   const [Count, setCount] = useState(0)

//   const Increment =() => setCount(Count+1)
//   const Reset =() => setCount(0)
//   const Decrement =() => setCount(Count-1)

//   return (
//     <div className="counter">
//       <h1>{Count}</h1>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Reset}> Reset</button>
//       <button onClick={Decrement}> Decrement</button>
//     </div>
//   )
// }

// import {useState} from 'react'

//  export const Counter = () => {
//   const [Friends, setFriends] = useState(['Alex','Bob','Charlie','David'])
//   const addNewFriend = () => setFriends([...Friends,'Elizabeth'])
//   const removeFriend = () => setFriends(Friends.filter((f) => f !== 'David'))
//   const updateFriend = () => {
//     setFriends(Friends.map(f=>f==="Alex" ? "Alex Smith" : f))
//   }
//   return (
//     <div>
//       {Friends.map((f) => (
//         <li key={Math.random()} >{f}</li>
//       ))}
//       <button onClick={addNewFriend} >add new friend</button>
//       <button onClick={removeFriend} >Remove friend</button>
//       <button onClick={updateFriend}>Update one friend</button>
//       </div>
//   )
// }

// export default Counter

// import {useState} from 'react'

// export const Counter = () => {
//   const [Movie, setMovie] = useState({
//     title: "RRR",
//     Rating:8,
//   })
//   const  updateRating = () => {
//     // const copyMovie= {
//     //   ...Movie,
//     //   Rating: 9
//     // }
//     setMovie({...Movie, Rating : 9})
//   }
//   return (
//     <div className="movie">
//       <h1>{Movie.title}</h1>
//       <h2>{Movie.Rating}</h2>
//       <button onClick={updateRating}>Update Rating</button>
//     </div>
//   )
// }
 import {useState} from 'react'
 
 export const Counter = () => {
  const [movies, setmovies] = useState(
   [
    {id:1,name:"spider",rating:8},
    {id:2,name:"rrr",rating:9},
    {id:3,name:"rolex",rating:8}
   ]
  )
  const HandleClick =() =>{
    setmovies(movies.map(m => m.id===1? {...movies,name:"john wick"}:m ))
  }
   return (
     <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.name}</li>
      ))}
      <button onClick={HandleClick}>CHANGE</button>
     </div>
   )
 }
 