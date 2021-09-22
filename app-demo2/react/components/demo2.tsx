import React, {useEffect, FC, useContext} from 'react'
// import Context from 'capacitacionio.app-demo1/context/context'
import {context} from 'capacitacionio.app-demo1'
console.log('context: ', context)

const Demo2: FC = () => {
  const ctx: any = useContext(context)
  console.log('ctx: ', ctx)

  useEffect(() => {
    console.log('llego aqui')
    // getName()
  }, [])

  return (
    <div>
      <h1>Hola app2!</h1>
      <p>Name: {ctx?.name}</p>
      <p>Value: {ctx?.value}</p>
      <p>Action: <button onClick={() => ctx?.getName()}>get name</button></p>
      <p>Action: <button onClick={() => ctx?.getValue()}>get value</button></p>
    </div>
  )
}

export default Demo2
