import React from 'react'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function QuoteSection() {
    return (
        <div className='section quote'>
            <p className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft} />
                Elevate your Cooking Game, Explore New Tastes, and Delight Your Senses so that you can Discover, Cook and Share the Joy of Exceptional Dining Experience.
                <FontAwesomeIcon icon={faQuoteRight} />
            </p>
            <p className="quote-author">
                -Team Unstoppables
            </p>
        </div>
    )
}
