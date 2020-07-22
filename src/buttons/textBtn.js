import React from 'react'

function HomeBtn() {
  return (
    <div>
      <button>Home</button>
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

function LatestNewsBtn() {
  return (
    <div>
      <button>Latest News</button>
    </div>
  )
}

function ExploreBtn() {
  return (
    <div>
      <button>Explore</button>
    </div>
  )
}

function ShopBtn() {
  return (
    <div>
      <button>Shop</button>
    </div>
  )
}

function AboutBtn() {
  return (
    <div>
      <button>About</button>
    </div>
  )
}

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
      <button>Listen</button>
    </div>
  )
}

export { HomeBtn, LatestNewsBtn, ExploreBtn, ShopBtn, AboutBtn, DonateBtn, ListenBtn, LiveBtn }
