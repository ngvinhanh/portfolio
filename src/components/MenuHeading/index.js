import React from 'react'

import { useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useDetectOutsideClick } from './useDetectOutsideClick';

import './MenuHeading.css'

function MenuHeading(){

      const dropdownRef = useRef(null);
      const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
      const onClick = () => setIsActive(!isActive);

        // const dropdownRef = useRef(null);
        // const [isActive, setIsActive] = useState(false);
        // const onClick = () => setIsActive(!isActive);

        return (
            <div className='menuContainer grid wide'>
                <nav className='menuMain'>
                    <ul className='font-loader row'>
                        <li className='l-3 m-3'><a href='#'>Welcome</a></li>
                        <li className='l-3 m-3'><a href="#cakeXou">My Story</a></li>
                        <li className='l-3 m-3'><a href='#projets'>Projects</a></li>
                        <li className='l-3 m-3'><a href='#contactId'>Contact</a></li>
                    </ul>
                </nav>
                <div className="menuDropdown">
                    <button onClick={onClick} className="menu-trigger">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                        <ul className='font-loader'>
                            <li><a href="#">Welcome</a></li>
                            <li><a href="#cakeXou">My Story</a></li>
                            <li><a href="#projets">Projects</a></li>
                            <li><a href="#contactId">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
}

export default MenuHeading