import React,{useState} from 'react'
import './navbar.css';
import { SiYourtraveldottv } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
    const [active, setActive]=useState('navBar')
    const showNav=()=>{ setActive('navBar activeNavbar')}
    const removeNavbar=()=>{setActive('navBar')}

  return (
    <section className="navBarSection">
        <header className="header flex">
            <div className='logoDiv'>
                <a href="#"className="logo flex">
                    <h1><SiYourtraveldottv className='icon' /> VOYAGE VITA</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className='navItem'>
                        <a href="#"className='navLink'>HOME</a>
                    </li>
                    <li className='navItem'>
                        <a href="#"className='navLink'>PACKAGE</a>
                    </li>
                    <li className='navItem'>
                        <a href="#"className='navLink'>SERVICE</a>
                    </li>
                    <li className='navItem'>
                        <a href="#"className='navLink'>CONTACT</a>
                    </li>
                    <li className='navItem'>
                        <a href="#"className='navLink'>ABOUT</a>
                    </li>
                    <button className='btn'>
                        <a href='#'>BOOK NOW</a>
                    </button>
                </ul>
                <div onClick={removeNavbar} className="closeNavbar">
                    <MdClose className='icon' />
                </div>
            </div>
            <div onClick={showNav} className='toggleNavbar'>
                <BsThreeDots  className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar
