import React from 'react'

import './Projets.css'
import photo from './photo/code.jpg'
import photo1 from './photo/creasoul.png'
import photo2 from './photo/cupOfTea.jpg'
import photo3 from './photo/fishChip.png'
import photo4 from './photo/wolfGang.png'
import photo5 from './photo/yoga.jpg'
import photo6 from './photo/mindgeek.jpg'


function Projects(){
    return(
        <div>
            <div className='projetsContainer row grid wide' id='projets'>
                <img src= {photo} alt='logo-code' className='code l-3 m-5 c-12'/>
                <div className='projetsPresentation font-loader l-9 m-7 c-12'>
                    <h1>Projects</h1>
                    <p>From a willing to make a site web for my cakes, I participate a course on developer web and from that moment, the desire of practicable the developmental web becomes my wish.
                    I have occasion to code many sites static in HTML, CSS, and some projects in PHP and Symfony2 in my second course.</p>
                    <p>Passionate in the front end developer , I start to study React JS myself. I use some skills in my portfolio such as React JS, Grid CSS with also a library that I build my self to make easier the responsive with CSS Flexbox.
                    </p>
                </div>
                
            </div>
            <div className='layoutGrid'>
                <div className='layoutItem'>
                    <img src={photo1} alt='photo1' className='layoutImage img1' />
                </div>
                <div className='layoutItem'>
                    <img src={photo2} alt='photo2' className='layoutImage' />
                </div>
                <div className='layoutItem'>
                    <img src={photo3} alt='photo3' className='layoutImage'/>
                </div>
                <div className='layoutItem'>
                    <img src={photo4} alt='photo4' className='layoutImage'/>
                </div>
                <div className='layoutItem'>
                    <img src={photo5} alt='photo5' className='layoutImage'/>
                </div>
                <div className='layoutItem'>
                    <img src={photo6} alt='photo6' className='layoutImage img1' />
                </div>
            </div>
        </div>
    )
}

export default Projects