// const Button = () => {
//     const handleclick = () => console.log(Math.round(Math.random()));
//   return (
//     <div className="button">
//         <button style={{ color:"Blue" }} onClick={handleclick}>Login</button>
//     </div>
//   )
// }

// export default Button

// const Copy =() => {
//     const handlingcopy =() => console.log("stop copying");
//     return (
//        <div className="copy" onCopy={handlingcopy}>
//         <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus expedita dignissimos mollitia at totam cupiditate? Obcaecati at consectetur 
//             eveniet aliquid cum doloribus sed. Enim dolor earum delectus culpa est qui, beatae maxime vitae hic?
//         </p>
//        </div>
//     )
// }

// export default Copy

const Move =() =>{
    const moveHandler  =() =>{
        alert("Mouse moved Event fired");
        console.log("mouse moved");
    }
    return(
        <div className="move" onMouseMove={moveHandler}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi voluptatibus ab ex temporibus eveniet hic! Voluptatum, totam omnis provident qui aliquid q
                uas ab cum pariatur repellendus sunt id in! Corporis quod natus nemo.</p>
        </div>
    )
}

export default Move;