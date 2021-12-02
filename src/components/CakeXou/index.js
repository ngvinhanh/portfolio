import React from 'react'

import './CakeXou.css'
import logo from './photo/cake2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function CakeXou(){
    return (
            <div className='cakeXouContainer row grid wide' id='cakeXou'>
                <div>
                    <img src= {logo} alt='logo' className='logo l-4 m-5 c-12'/>
                    <div className='cakeXouPresentation font-loader l-8 m-7 c-12'>
                        <h1>My Story</h1>
                        <p>Graduated with a degree in finance and economics, but the design and creativity have always been something I've always wanted to do.   </p>
                        <p>Start with a homemade Christmas cake, i spent 5 years with CakeXou, a small brand of cake designer that I own myself. It is a very special experience. I have many chances to create, by drawing personages, modeling figurines and also design and make personages from prototype in life.</p>
                        <p>Here are some of my works
                        <span><FontAwesomeIcon icon={faHeart} /></span>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default CakeXou

