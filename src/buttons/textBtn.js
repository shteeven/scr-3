import React from 'react'

function DonateBtn() {
  return (
    <div>
      <button class="bg-yellow-500 text-white font-bold py-2 px-4 rounded">Donate</button>
    </div>
  )
}

function ListenBtn() {
  return (
    <div>
      <p>Listen</p>
    </div>
  )
}

function LiveBtn() {
  return (
    <div>
      <button class="bg-red-700 text-white font-bold py-2 px-4 rounded">Live</button>
    </div>
  )
}

export { DonateBtn, ListenBtn, LiveBtn }
