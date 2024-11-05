import {useEffect} from 'react'

const BasicEffect = () => {
  useEffect(() => {
    console.log('Component Mounted');
  },[]);

  return (
    <div>
        <h1>BasicEffect</h1>
    </div>
  )
}

export default BasicEffect