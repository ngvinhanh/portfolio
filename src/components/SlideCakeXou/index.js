import React from 'react'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import "./SlideCakeXou.css"

import img1 from './photo/slide1/flo1.jpg'
import img2 from './photo/slide1/flo2.jpg'
import img3 from './photo/slide1/flo7.jpg'
import img4 from './photo/slide1/flo10.jpg'
import img5 from './photo/slide1/nv8.jpg'
import img6 from './photo/slide1/nv10.jpg'
import img7 from './photo/slide1/nv11.jpg'
import img8 from './photo/slide1/nv14.jpg'
import img9 from './photo/slide1/nv15.jpg'
import img10 from './photo/slide1/ot11.jpg'

import img11 from './photo/slide2/cup3.jpg'
import img12 from './photo/slide2/pe7.jpg'
import img13 from './photo/slide2/ot1.jpg'
import img14 from './photo/slide2/pe1.jpg'
import img15 from './photo/slide2/pe6.jpg'
import img16 from './photo/slide2/pe10.jpg'
import img17 from './photo/slide2/pe12.jpg'
import img18 from './photo/slide2/pe16.jpg'
import img19 from './photo/slide2/pe2.jpg'
import img20 from './photo/slide2/pe11.jpg'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

function SlideCakeXou(){

    return (
        <div className="slideCakeXouContainer grid wide row">
            <div className='slideContainer1 l-5 m-5 c-12'>
                <Slide {...properties}>
                    <div className='each-slide'>
                        <div>
                            <img src={img1} alt='photoCake1' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img2} alt='cake2' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img3} alt='cake3' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img4} alt='cake4' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img5} alt='cake5' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img6} alt='cake6' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img7} alt='cake7' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img8} alt='cake8' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img9} alt='cake9' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img10} alt='cake10' />
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='slideContainer2 l-5 m-5 c-12'>
            <Slide {...properties}>
                    <div className='each-slide'>
                        <div>
                            <img src={img11} alt='cake11' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img12} alt='cake12' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img13} alt='cake13' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img14} alt='cake14' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img15} alt='cake15' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img16} alt='cake16' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img17} alt='cake17' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img18} alt='cake18' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img19} alt='cake19' />
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div>
                            <img src={img20} alt='cake20' />
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default SlideCakeXou;