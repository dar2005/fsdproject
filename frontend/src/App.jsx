import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Delete from './components/Delete'
import Update from './components/Update'
const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor:'greenyellow'}}>User Registration system</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App