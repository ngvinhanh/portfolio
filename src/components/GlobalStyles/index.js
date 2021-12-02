import React from 'react'

import {useEffect} from 'react'
import WebFont from 'webfontloader';

import './GlobalStyles.css'

function GlobalStyles({ children }){

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka', 'Georgia']
          }
        });
       }, []);

    return children
}

export default GlobalStyles