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
      <button className="block">Explore</button>
      <div className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
          menu1
        </a>
        <a href="#" className="block">
          menu2
        </a>
        <a href="#" className="block">
          menu3
        </a>
      </div>
    </div>
  )
}

function ShopBtn() {
  return (
    <div>
      <button className="block">Shop</button>
      <div className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
          menu1
        </a>
        <a href="#" className="block">
          menu2
        </a>
        <a href="#" className="block">
          menu3
        </a>
      </div>
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
