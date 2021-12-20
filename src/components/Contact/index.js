import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

import './Contact.css'

function Contact(){
    return (
        <div className='contactContainer row grid wide font-loader' id='contactId'>
            <p className='l-12 m-12 c-12 message' >If you want to collaborate or have any questions, please get in touch - I'd love to hear from you !</p>
            <div className='row grid wide font-loader'>
                <h1 className='l-4 m-4 c-12'>Contact</h1>
                <div  className='contact l-8 m-8 c-12'>
                    <p><span><FontAwesomeIcon icon={faEnvelope} /></span><strong>Email:</strong> ngvinhanh@gmail.com</p>
                    <p><span className='phone'><FontAwesomeIcon icon={faPhoneSquare} /></span><strong>Tel:</strong> 06 01 77 15 97</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;