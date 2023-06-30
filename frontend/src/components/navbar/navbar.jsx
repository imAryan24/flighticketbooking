import React, {useState} from 'react';

import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png';

const NavBar = ()=>{
//Managing NavBar in the small screens
const [active, setActive] = useState('navBarMenu')
const showNavBar = ()=>{
    setActive('navBarMenu showNavBar')
}
const removeNavBar = ()=>{
    setActive('navBarMenu')
}

//adding background color to second navbar
const [noBg, addBg] = useState('navBarTwo')

const addBgColor = ()=>{
    if(window.scrollY >= 10){
        addBg('navBarTwo navbar_With_Bg')
    }else{
        addBg('navBarTwo')
    }
}
window.addEventListener('scroll', addBgColor)


    return (
        <div className='navBar flex'>
            <div className='navBarOne flex'>
                <div>
                    <SiConsul className='icon'/>
                </div>
                
                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrate/> Support</li>
                    <li className='flex'> <AiOutlineGlobal/> Languages</li>
                </div>

                <div className="atb flex">
                    {/* <Link to="/Login">
                    <button>Login</button>
                    </Link> */}
                    <span>Sign Out</span>
                </div>
            </div>
            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} alt="Logo" className='logo' />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destination</li>
                    </ul>

                    <button onClick={removeNavBar} className='btn flex btnOne'>
                        Contact
                    </button>
                </div>

                <button className='btn flex btnTwo'>
                        Contact
                </button>

                <div onClick={showNavBar} className="toggleIcon">
                        <CgMenuGridO className='icon'/>
                </div>
                    
                
            </div>
        </div>
    )
}

export default NavBar