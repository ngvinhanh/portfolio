import React from 'react'

import './Welcome.css'
import photo from './photo/avaVA.jpg'

function Welcome(){

    return(
        <div className='welcomeContainer row grid wide' id='welcome'>
            <img src= {photo} alt='avatar' className='avatar l-3 m-5 c-12'/>
            <div className='welcomePresentation font-loader l-9 m-7 c-12'>
                <h1>Hello & Welcome</h1>
                <div>
                    <p>Hello, my name is Vinh Anh and I'm a web developer from Paris.</p>
                    <p>I enjoy working as a front-end web developer and building aesthetically pleasing yet intuitive and functional websites.</p>
                    <p>My guiding principle is that if there's something I don't understand, it's just because I haven't spent enough time on it. I’m not afraid of trying hard until I can be proud of my work.</p>
                    <p>I'd love to get to know people with the same perspective on life.</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome