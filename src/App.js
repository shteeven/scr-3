import React from 'react'
import './App.css'
import './tailwind.generated.css'
import DisplayCard from './display-card/display-card'
import { LiveBtn } from './buttons/textBtn'

function App() {
  return (
    <div className="App" id="head">
      <div>
        <h1>Hello</h1>
        <DisplayCard />
        <LiveBtn />
      </div>
    </div>
  )
}

export default App
