import React,{useEffect} from 'react'
import'./footer.css'
import { FiSend } from "react-icons/fi";
import video2 from"../../assets/home.mp4";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { GiLouvrePyramid } from "react-icons/gi";
import { FiChevronRight } from "react-icons/fi";
import { FaFacebook,FaTwitter  } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
   useEffect(()=>{
    Aos.init({duration: 2000})
   },{})
  return (
    <section className='footer'>
      <div className='videoDiv' id='about'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className='secContent container' id='contact'>
        <div className='contactDiv flex'>
          <div  data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input  data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button  data-aos="fade-up" className="btn flex" type="submit">SEND <FiSend className='icon' /></button>
          </div>
        </div>
        <div data-aos="fade-up" className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#'className='logo flex'><SiYourtraveldottv className="icon"/>Voyage Vista</a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
                    Contact Number : +91 75388 23044<br></br>
                    Email : nithishadhithya04@gmail.com
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <FaFacebook  className='icon'/>
              <AiFillInstagram  className='icon'/>
              <FaTwitter  className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
            <div  span data-aos="fade-up"data-aos-duration="3000-up"className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex"><FiChevronRight  className='icon'/>SERVICES</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>AGENCY</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>Insurance</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>TOURISM</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>PAYMENT</li>
            </div>
            <div  span data-aos="fade-up"data-aos-duration="3000-up"className="linkGroup">
              <span className="groupTitle">TRIPS INFO</span>
              <li className="footerList flex"><FiChevronRight  className='icon'/>DESTINATION</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>PACKAGES</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>ITINERARIES</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>ACCOMMODATIONS</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>ACTIVITIES</li>
            </div>
            <div  span data-aos="fade-up"data-aos-duration="3000-up"className="linkGroup">
              <span className="groupTitle">BEST MOMENTS</span>
              <li className="footerList flex"><FiChevronRight  className='icon'/>MEMORIES</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>STORIES</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>REVIEWS</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>GALLERY</li>
              <li className="footerList flex"><FiChevronRight  className='icon'/>TRAVEL BLOG</li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPY RIGHS RESERVED 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
