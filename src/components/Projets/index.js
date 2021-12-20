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
                <img src= {photo} alt='logo-code' className='logoCode l-3 m-5 c-12'/>
                <div className='projetsPresentation font-loader l-9 m-7 c-12'>
                    <h1>Projects</h1>
                    <p>Wishing to make a website for my baking business, I enrolled in a web developing course. Here I found out that in developing websites, I can also fulfill my wish to create and design. I have coded many static sites in HTML, CSS, and some projects in PHP and Symfony2 in my second course.</p>
                    <p>Passionate in being a front end developer, I started to study ReactJS myself. In my portfolio, I use some tools such as ReactJS, Grid CSS, and a self-compiled library to make responsive websites using CSS Flexbox.</p>
                </div>
                
            </div>
            <div className='layoutGrid'>
                <div className='layoutItem'>
                    <img src={photo1} alt='photo1' className='layoutImage imgFit' />
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
                    <img src={photo6} alt='photo6' className='layoutImage imgFit' />
                </div>
            </div>
        </div>
    )
}

export default Projects