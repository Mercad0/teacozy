import React from 'react'

interface CardProps {
    title?: string;
    src?: string;
    alt?: string;
    
}


 function Card({
    title = "amazing Tea",
    src = "https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg",
    alt = "Amazing Tea"
 }: CardProps) {
  return (
    <div className="w-80 h-52 text-center m-8">
    <img src={src} alt={alt} className="mb-2 w-full"/>
    <h3 className="text-2xl font-bold">{title}</h3>
  </div>
  )
}

export default Card