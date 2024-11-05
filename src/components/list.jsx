// const List = () => {
//   const num=[1,2,3,4,5]
//     return (
//         <main>
//             {num.map((num) =>(
//                 <ul key={num}>
//                     <li>{num}</li>
//                 </ul>
//             ))}
//         </main>
//   )
// }

// export default List
// const List = () => {
//       const usersInfo = [
//         {
//           username: "HuXn",
//           email: "test@gmail.com",
//           location: "USA",
//         },
//         {
//           username: "John",
//           email: "jd@gmail.com",
//           location: "Arab",
//         },
//         {
//           username: "Alex",
//           email: "alexmersion@gmail.com",
//           location: "India",
//         },
//       ];
//       return (
//         <div>
//             {usersInfo.map((user) => (
//                 <ul key={Math.random}>
//                     <li>{user.username}</li>
//                     <li>{user.email}</li>
//                     <li>{user.location}</li>
//                 </ul>
//             ))}
//         </div>
//       )
//     }
//     export default List


const list = () => {
    const users=[
        {id:1,name:"Alice",age:"18"},
        {id:2,name:"Bob",age:"18"},
        {id:3,name:"Char lee",age:"18"},
        {id:4,name:"David",age:"18"}
    ]
  return (
    <div>
        {users.map((user) => (
            <ul key={Math.random}>
                <li>name: {user.name}</li>
                <li>id : {user.id}</li>
                <li>age: {user.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default list