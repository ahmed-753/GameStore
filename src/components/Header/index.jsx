import React from 'react';
import './style.css'
import {Link} from "react-router-dom";
import {BsCartCheckFill} from 'react-icons/bs'



const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__wrapper'>
                    <Link to='/' className='header__logo' >GAME STORE</Link>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                    <BsCartCheckFill className='header__card'/>
                        <span style={{fontWeight:'bold',color:'white'}}>3200руб</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;