const Person = (props) => {
  return (
    <section>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </section>
  )
}

export default Person