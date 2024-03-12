import React, { useEffect } from "react";
import "./main.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa6";
import img from "../../assets/Vagnew.jpg";
import img1 from "../../assets/TajmahalDelhi.jpg";
import img2 from "../../assets/Munnar.jpg";
import img3 from "../../assets/Goa.jpg";
import img4 from "../../assets/Vagamon.jpg";
import img5 from "../../assets/Munnar.jpg";
import img6 from "../../assets/Mysore.jpg";
import img7 from "../../assets/Munnar.jpg";
import img8 from "../../assets/Munnar.jpg";
import img9 from "../../assets/Munnar.jpg";
import img10 from "../../assets/Munnar.jpg";
import img11 from "../../assets/Munnar.jpg";
import img12 from "../../assets/beach-Pondicherry.jpg";
import img13 from "../../assets/Topslip.jpg";
import img14 from "../../assets/Munnar.jpg";
import img15 from "../../assets/Munnar.jpg";
import img16 from "../../assets/Munnar.jpg";
import img17 from "../../assets/Munnar.jpg";
import img18 from "../../assets/Munnar.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Data = [
  {
    id: 1,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 2,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 3,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 4,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 5,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 6,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 7,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 8,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 9,
    imgSrc:img1 ,
    destTitle: "DELHI-AGRA",
    location:"India",
    grade:"CULTURAL RELAX",
    fees:"$100.0",
    description:" Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  
  
];
const Main = () => {
  useEffect(()=>{Aos.init({duration:2000})},[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees ,description }) => {
          return (
            <div data-aos="fade-up" key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className="btn flex">DETAILS<FaClipboardCheck className="icon" /></button>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default Main;
