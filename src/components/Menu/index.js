import React from 'react';
import Logomegaflix from '../../assets/Logomegaflix.png';
import './Menu.css'
import Button from './Button/index'
// import ButtonLink from './Components/ButtonLink'

function Menu(){
    return (
        <nav className = 'Menu'>
            <a href='/'>
                <img className = 'Logo' src={Logomegaflix} alt="MegaFlix logo"/>
            </a>
            <Button as= 'a' className = 'ButtonLink' href='/'>
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;