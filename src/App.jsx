import { useState } from 'react'
import AppMain from './component/AppMain'


function App() {



  const [count, setCount] = useState(0)

  return (
    <>
      <AppMain />
    </>
  )
}

export default App
