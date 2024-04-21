import React,{useState} from 'react'
import './navbar.css';
import { SiYourtraveldottv } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
    const [active, setActive]=useState('navBar')
    const showNav=()=>{ setActive('navBar activeNavbar')}
    const removeNavbar=()=>{setActive('navBar')}
    const [visible, setFormActive]=useState('close')
    const showForm=()=>{ setFormActive('')}
    const removeForm=()=>{setFormActive('close')}

  return (
    <>
        <section className="navBar Section">
            <header className="header flex">
                <div className='logoDiv'>
                    <a href="#" className="logo flex">
                        <h1><SiYourtraveldottv className='icon'/>Voyage Vista</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className='navItem'>
                            <a href="#home"className='navLink'>HOME</a>
                        </li>
                        <li className='navItem'>
                            <a href="#package"className='navLink'>PACKAGE</a>
                        </li>
                        {/* <li className='navItem'>
                            <a href="#"className='navLink'>SERVICE</a>
                        </li> */}
                        
                        <li className='navItem'>
                            <a href="#about"className='navLink'>ABOUT</a>
                        </li>
                        <li className='navItem'>
                            <a href="#contact"className='navLink'>CONTACT</a>
                        </li>
                        <button onClick={showForm} className='btn'>
                            <a href='#package'>BOOK NOW</a>
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
        {/* <div className={`${visible} form_custom flex`}>
            <div className='form_title'>
                Explore the world with us
                <MdClose onClick={removeForm} className='form_close'></MdClose>
            </div>
            <div className='form_input_container'>
                <div className='form_input_div'>
                    <input className='text_input' type='text' placeholder='Type your name'></input>
                </div>
                <div className='form_input_div'>
                    <div class="phone-input">
                        <select id="country-code">
                            <option value="+1">+91</option>
                            <option value="+44">+44</option>
                        </select>
                        <input className='tel_input' type="tel" id="phone-number" placeholder="Enter phone number"></input>
                    </div>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='email' placeholder='Insert your Email'></input>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='text' placeholder='Your Destination'></input>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='text' placeholder='Your Boarding Point'></input>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='date'></input>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='date'></input>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='text' placeholder='Adult count'></input>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='text' placeholder='Child count'></input>
                </div>
                <div className='form_input_div'>
                    <input className='text_input' type='text' placeholder='Senior count'></input>
                </div>
                <div className='form_input_div'>
                    <select className='text_input'>
                        <option disabled selected>Choose Occasion</option>
                        <option></option>
                    </select>
                </div>
                <div className='form_input_div'>
                    <select className='text_input'>
                        <option disabled selected>Choose Hotel type</option>
                        <option></option>
                    </select>
                </div>
                <div className='form_input_div'>
                    <select className='text_input'>
                        <option disabled selected>Choose Travel Mode</option>
                        <option></option>
                    </select>
                </div>
                <div className='form_input_div'>
                    <textarea className='text_input' rows={3} placeholder='Your message'></textarea>
                </div>
                <div className='form_input_div'>
                    <button type='submit' className='form_btn'>
                        Submit
                    </button>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default Navbar
