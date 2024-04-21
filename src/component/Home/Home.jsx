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
    <section className="home" id="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="home/mp4"></video>

      <div className="homecontent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">INCREDIBLE !NDIA</span>
          <h1  data-aos="fade-up" className="homeTitle">EXPLORE DESTINATIONS</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv flex">
          <h1 data-aos="fade-up" className="homeTitle black">WE UNDERTAKE</h1>
          <div className="flex flex_row">
            <div>
              <span data-aos="fade-up" className="smallText black">-Family Tours</span><br></br>
              <span data-aos="fade-up" className="smallText black">-Industrial Visit</span><br></br>
              <span data-aos="fade-up" className="smallText black">-Pilgrimage Tours</span>
            </div>
            <div>
              <span data-aos="fade-up" className="smallText black">-Educational Package Tours</span><br></br>
              <span data-aos="fade-up" className="smallText black">-Corporate Incentive Tours</span><br></br>
            </div>
            <div>
              <span data-aos="fade-up" className="smallText black">-Eco Tourism</span><br></br>
              <span data-aos="fade-up" className="smallText black">-Escorted Tours</span><br></br>
              <span data-aos="fade-up" className="smallText black">-All India Tours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
