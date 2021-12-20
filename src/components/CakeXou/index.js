import React from 'react'

import './CakeXou.css'
import logo from './photo/cake2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function CakeXou(){
    return (
            <div className='cakeXouContainer row grid wide' id='cakeXou'>
                <img src= {logo} alt='logo' className='logo l-4 m-5 c-12'/>
                <div className='cakeXouPresentation font-loader l-8 m-7 c-12'>
                    <h1>My Story</h1>
                    <p>I graduated with a degree in Finance and Economics, but design and creativity have always been something I want to do.   </p>
                    <p>Feeling inspired after making a homemade Christmas cake, I poured my creativity energy into building a local baking business called CakeXou. The five years with CakeXou was a special experience, in which I had the chance to design and make pretty figures that are edible!</p>
                    <p>Here are some of my cakes
                    <span><FontAwesomeIcon icon={faHeart} /></span>
                    </p>
                </div>
            
            </div>
    )
}

export default CakeXou

