import React from 'react'
import SplitScreen from './components/SplitScreen'
import Left from './components/Left'
import Right from './components/Right'

const App = () => {
  return (
   <>
   <SplitScreen leftWeight={15} rightWeight={85} >
    <Left />
    <Right />
   </SplitScreen>
   </>
  )
}

export default App