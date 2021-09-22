import React from 'react'
import StateDemo from 'capacitacionio.app-demo1/StateDemo'
import Demo2 from './components/demo2'
console.log('StateDemo: ', StateDemo)


function Component1() {
  return (
    <StateDemo>
      <Demo2 />
    </StateDemo>
  )
}

export default Component1
