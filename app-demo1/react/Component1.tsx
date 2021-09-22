import React, {FC} from 'react'
import StateDemo from './StateDemo'
import Demo1 from './components/demo1'


const Component1: FC = () => {
  return (
    <StateDemo>
      <Demo1 />
    </StateDemo>
  )
}

export default Component1
