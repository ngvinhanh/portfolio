import React from 'react'

import {useState, useEffect} from 'react';
import './Content.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


function Content() {
    // scroll man hinh, neu scroll tren 200px thì hien button Go To Top -------------------------
            
    const [showGoToTop, setShowGoToTop] = useState(false);
            
    useEffect(() => {

        const handleScroll = () => {

            window.scrollY >= 200 ? setShowGoToTop(true) : setShowGoToTop(false);
            // setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        
    }, [])

    const handleGoUp = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="content">
            {showGoToTop && (
                <button style = {{ right: 30, bottom: 50}} className="font-loader" onClick = { handleGoUp }>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
                )}
        </div>
    );
}

export default Content;