import { useContext } from 'react'

import Context from './context'

const useDemo = () => {
  return useContext(Context);
}

export default useDemo;
