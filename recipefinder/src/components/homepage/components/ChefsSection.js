import React from 'react'
import ChefsCard from './ChefsCard'
export default function ChefsSection() {

  const chefs =[
    {
      name: "Ayash Kumar",
      img: "/img/top-chefs/img_1.jpg",
      recipesCount: "10",
      country: "India",
      cuisine: "Indian",
    },
    {
      name: "Hephzibah Ranjan",
      img: "/img/top-chefs/img_2.jpg",
      recipesCount: "10",
      country: "India",
      cuisine: "Korean",
    },
    {
      name: "Beulah Ranjan",
      img: "/img/top-chefs/img_2.jpg",
      recipesCount: "10",
      country: "India",
      cuisine: "Korean",
    },
    {
      name: "Ranveer Brar",
      img: "/img/top-chefs/img_3.jpg",
      recipesCount: "10",
      country: "India",
      cuisine: "Chinese",
    },
    {
      name: "Cristiano Ronaldo",
      img: "/img/top-chefs/img_4.jpg",
      recipesCount: "10",
      country: "Portugal",
      cuisine: "Spanish",
    },
    {
      name: "Lionel Messi",
      img: "/img/top-chefs/img_5.jpg",
      recipesCount: "10",
      country: "Argentina",
      cuisine: "Spanish",
    },
  ]

  return (
    <div className='section chefs'>
      <div className="heading-title">
        <h1 className="chefs-title">
          Our <span className="culnarians">Leading Culnarians</span>
        </h1>
        <h3 className='sub-title'>
          -Top Chefs
        </h3>
      </div>
      <div className="top-chefs-container">
        {/* <ChefsCard />
        <ChefsCard />
        <ChefsCard />
        <ChefsCard />
        <ChefsCard />
        <ChefsCard /> */}

        {chefs.map((chef) => <ChefsCard key={chef.name} chef={chef} />)}
      </div>
    </div>
  )
}
