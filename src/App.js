import React from 'react'
import './App.css'
import './tailwind.generated.css'
import DisplayCard from './display-card/display-card'

function App() {
  return (
    <div className="App" id="head">
      <div>
        <h1>Hello</h1>
        <DisplayCard />
      </div>
    </div>
  )
}

export default App
