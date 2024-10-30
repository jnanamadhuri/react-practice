const Cold = () => <h1>Its cold outside</h1>;
const Nice =() => <h1>Its nice outside</h1>;
const Hot =() => <h1>Its hot outside</h1>;


const Weather = (temp) => {
  if(temp<15){
    return <Cold/>
   }
   else if(temp>=15 && temp<=25){
    return <Nice/>
   }
   else{
    return <Hot/>
   }
}

export default Weather