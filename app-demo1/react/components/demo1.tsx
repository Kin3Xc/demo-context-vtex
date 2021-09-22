import React, {useContext, useEffect} from 'react'
import Context from '../context'
console.log('Context: ', Context)

function Demo1() {
  const {getValue, getName, name, value }: any = useContext(Context);

  useEffect(() => {
    getName()
  }, [])

  return (
    <div>
      <h1>Hola!</h1>
      <p>Name: {name}</p>
      <p>Value: {value}</p>
      <p>Action: <button onClick={() => getValue()}>get value</button></p>
    </div>
  )
}

export default Demo1
