import React, { useEffect } from "react";
import "./home.css";
import video from "../../assets/home.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagramSquare } from "react-icons/fa";
import { GiTripleScratches } from "react-icons/gi";
import { FaList } from "react-icons/fa";
import { TbApple } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{Aos.init({duration:2000})},[])
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="home/mp4"></video>

      <div className="homecontent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our packages</span>
          <h1  data-aos="fade-up" className="homeTitle">Search Your Holiday</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter City Here" />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select Your Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">MaxPrice:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter  className="icon "/>
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <TfiFacebook className="icon" />
            <FaInstagramSquare className="icon" />
            <GiTripleScratches className="icon"/>
          </div>
          <div className="leftIcons">
            <FaList className="icon" />
            <TbApple  className="icon"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
