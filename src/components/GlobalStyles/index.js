import React from 'react'

import {useEffect} from 'react'
import WebFont from 'webfontloader';

import './GlobalStyles.css'

function GlobalStyles({ children }){

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Chilanka', 'Georgia', 'Cambria', 'Times New Roman']
          }
        });
       }, []);

    return children
}

export default GlobalStyles