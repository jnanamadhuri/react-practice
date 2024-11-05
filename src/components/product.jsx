const Product = () => {
     const product ={
        name :"laptop",
        price:"$4000",
        availability:"in stock"
    }
    return (
        <div>
            <h1>products information</h1>
            <p>
                name :{product.name} <br />
                price :{product.price} <br />
                availability :{product.availability} <br />
            </p>
        </div>
    )
}

export default Product