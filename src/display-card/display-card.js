import React from 'react'
import Card from './card'

const source = [
  {
    name: 'dog',
    pic:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
  },
  {
    name: 'cat',
    pic:
      'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
  },
  {
    name: 'squirrel',
    pic:
      'https://images.theconversation.com/files/334473/original/file-20200512-82357-11i5o76.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
  },
  {
    name: 'fish',
    pic:
      'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'deer',
    pic: 'https://dublinohiousa.gov/dev/dev/wp-content/uploads/2018/10/deer-2018.jpg',
  },
  {
    name: 'horse',
    pic:
      'https://www.thesprucepets.com/thmb/MZcIufmv4DQ6QlSYy6YBmo0Pzg4=/3435x2576/smart/filters:no_upscale()/horse-galloping-in-grass-688899769-587673275f9b584db3a44cdf.jpg',
  },
]

function DisplayCard() {
  return (
    <div className="px-2 ">
      <div className="flex flex-wrap -mx-2">
        {source.map((item) => (
          <Card itemPic={item.pic} itemName={item.name} />
        ))}
      </div>
    </div>
  )
}

export default DisplayCard
