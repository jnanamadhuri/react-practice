const Greet =() => {
    const heading="hola!! have a nice day";
const paragraph=new Date();
    return(
        <div>
            <h1>{heading}</h1>
            <p>the current time is {paragraph.getDate()}</p>
        </div>
    );
};

export default Greet;
