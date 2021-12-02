import React from 'react'

import './Welcome.css'
import photo from './photo/ava2.jpg'

function Welcome(){

    return(
        <div className='welcomeContainer row grid wide' id='welcome'>
            <img src= {photo} alt='avatar' className='avatar l-3 m-5 c-12'/>
            <div className='welcomePresentation font-loader l-9 m-7 c-12'>
                <h1>Hello & Welcome</h1>
                <div>
                    <p>Hello, my name is Vinh Anh and I’m a web developer from Paris.</p>
                    <p>Working like front end web developer  and watching these beautiful site web build, with a perfect responsive is my objective.</p>
                    <p>My basic opinion is that if there's something I don't understand, it's just because I haven't spent enough time on it. That perspective helps me keep trying.</p>
                    <p>Hope we have something in common that we can share.</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome