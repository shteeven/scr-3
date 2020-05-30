import React from 'react'

function card(props) {
  const handleCardClick = (event) => {
    console.log('card clicked')
  }

  return (
    <div
      className="sm:w-2/3 md:w-1/3 lg:w-1/5 px-2 max-w-sm rounded overflow-hidden inline-block"
      onClick={handleCardClick}
    >
      <img className="w-full" src={props.itemPic} alt="animal" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.itemName}</div>
      </div>
    </div>
  )
}

export default card
