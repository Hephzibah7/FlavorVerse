import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function ChefsCard({chef}) {
  return (
    <div className='chef-card'>
       <div className="chef-card-img">
        <img src={chef.img} alt="" />
       </div>
       <div className="chef-card-info">
        <h3 className="chef-card-name">{chef.name}</h3>
        <p className="chef-card-count">Recipes: <b>{chef.recipesCount}</b></p>
        <p className="chef-card-country ">Country: <b>{chef.country}</b></p>
        <p className="chef-cuisine">Cuisine: <b>{chef.cuisine}</b></p>
        <p className="chef-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
       </div>
    </div>
  )
}
