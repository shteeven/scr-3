import React from 'react'
import './card.scss'

function Card(props) {
  const handleCardClick = (event) => {
    console.log('card clicked')
  }

  const imageDiv = {
    backgroundImage: `url(${props.itemPic})`,
  }

  return (
    <div
      className="sm:w-2/3 md:w-1/3 lg:w-1/5 px-2 max-w-sm rounded overflow-hidden inline-block"
      onClick={handleCardClick}
    >
      <div className="imageWrapper">
        <div className="imageContainer img" style={imageDiv}></div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.itemName}</div>
      </div>
    </div>
  )
}

export default Card
