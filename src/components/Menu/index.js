import React from 'react';
import { Link } from 'react-router-dom'
import Logomegaflix from '../../assets/Logomegaflix.png';
import './Menu.css'
import Button from './Button/index'
// import ButtonLink from './Components/ButtonLink'

function Menu(){
    return (
        <nav className = 'Menu'>
            <Link to ='/'>
                <img className = 'Logo' src={Logomegaflix} alt="MegaFlix logo"/>
            </Link>
            <Button as= {Link} className = 'ButtonLink' to ='../../cadastro/videos'>
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;