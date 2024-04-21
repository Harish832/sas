import React, { useEffect } from "react";
import "./main.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa6";
import img1 from "../../assets/TajmahalDelhi.jpg";
import img2 from "../../assets/Goa.jpg"
import img3 from "../../assets/Mysore.jpg"
import img4 from "../../assets/Charminar.jpg"
import img5 from "../../assets/Bangalore.webp"
import img6 from "../../assets/Kovalam.jpg"
import img7 from "../../assets/Kolkata2.jpg"
import img8 from "../../assets/Jatayu.jpg"
import img9 from "../../assets/Vagamon.jpg"
import img10 from "../../assets/Kodikanal.jpg"
import img11 from "../../assets/Munnar.jpg"
import img12 from "../../assets/ooty.avif"
import img13 from "../../assets/Wayanad.webp"
import img14 from "../../assets/KeralaHouse.jpg"
import img15 from "../../assets/Topslip.jpg"
import img16 from "../../assets/beach-Pondicherry.jpg"
import img17 from "../../assets/Trivandrum1.jpg"
import img18 from "../../assets/DelhiIndiagate.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useNavigate } from "react-router-dom";
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "DELHI-AGRA",
    location: "India",
    days: "9 Nights/10 Days",
    description: " Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatehpur Sikri, Lotus Temple, Risikesh, Kasi, Varanasi, Rameswaram",
  },
  {
    id: 2,
    imgSrc:img2,
    destTitle: "GOA",
    location:"India",
    days:"3 Nights/4 Days",
    description:" North Goa, South Goa, Dancing Boat, Temple & Beach",
  },
  {
    id: 3,
    imgSrc:img3 ,
    destTitle: "MYSORE-COORG",
    location:"India",
    days:"3 Nights/4 Days",
    description:" Palace, Garden, Zoo, Thala Cauvery, Falls, Raja Seat",
  },
  {
    id: 4,
    imgSrc:img4 ,
    destTitle: "HYDERBAD",
    location:"India",
    days:"4 Nights/5 Days",
    description:"Charminar, Fort, Temple, Ramoji Film City- Full Day, Bazaar, Nehru Park, NTR Park, Statue Boating, Snow World & Museum ",
  },
  {
    id: 5,
    imgSrc:img5 ,
    destTitle: "BANGALORE-MYSORE",
    location:"India",
    days:"2 Nights/3 Days",
    description:"Lal Bagh, Mysore Palace, Lake, Museum, Brindavan Garden, Iskcon",
  },
  {
    id: 6,
    imgSrc:img6 ,
    destTitle: "KERALA",
    location:"India",
    days:"2 Nights/3 Days",
    description:"Alleppey House Boat, Beach, Kochin, Wonderla Full Day Themepark",
  },
  {
    id: 7,
    imgSrc:img7 ,
    destTitle: "KOLKATA-DARJEELING",
    location:"India",
    days:"6 Nights/7 Days",
    description:"Haora Bridge, Birla Mandir, Science City, Temple, Garden, Boating, Metro Train & Big Bazaar, Darjlin Full Sight Seen",
  },
  {
    id: 8,
    imgSrc:img8 ,
    destTitle: "TRIVANDRUM",
    location:"India",
    days:"1 Nights/2 Days",
    description:"Jatayu, Wonderla, kovalam Beach, Zoo ",
  },
  {
    id: 9,
    imgSrc:img9 ,
    destTitle: "VAGAMON",
    location:"India",
    days:"1 Nights/2 Days",
    description:"  Adventure Jeep Raid, Park, Pine Forest, View Point, Boating",
  },
  {
    id: 10,
    imgSrc:img10 ,
    destTitle: "KODAIKANAL",
    location:"India",
    days:"1 Nights/2 Days",
    description:"Guna Caves, Pillar Rock, Silver Falls, View Point, Boating",
  },
  {
    id: 11,
    imgSrc:img11,
    destTitle: "MUNNAR",
    location:"India",
    days:"1 Nights/2 Days",
    description:"Mattupatty Dam, Park, Kundale Dam, Echo Point, View Point, Tea Factory",
  },
  {
    id: 12,
    imgSrc:img12 ,
    destTitle: "OOTY-MYSORE-BANGALORE",
    location:"India",
    days:"3 Nights/4 Days",
    description:"Lake, Museum, Palace, Lal Bagh, Coonoor, Brindavan",
  },
  {
    id: 13,
    imgSrc:img13 ,
    destTitle: "KERALA-WAYAND",
    location:"India",
    days:"2 Nights/3 Days",
    description:"Kalpetta, Sulthan Bathery, View Point,  Calicut Beach, Palakadu, Dam, Park",
  },
  {
    id: 14,
    imgSrc:img14,
    destTitle: "TRIVANDRUM",
    location:"India",
    days:"1 Nights/2 Days",
    description:"Zoo, Museum, Kovalam Beach, Lake, Temple, Thenmala Eco, Planetarium, Adventure Package & Boating, ",
  },
  {
    id: 15,
    imgSrc:img15,
    destTitle: "KERALA TOPSLIP",
    location:"India",
    days:"1 Nights/2 Days",
    description:"Top Slip, Forest  Van Trip, Stay-Parambikulam Tiger Reserve, Kovil",
  },
  {
    id: 16,
    imgSrc:img16,
    destTitle: "CHENNAI - PONDICHERRY",
    location:"India",
    days:"2 Nights/3 Days",
    description:"Merina Beach, Museum & Local Sight Seen, Mahabalipuram & Auroville, Aravind Asramam, Temple, Beach",
  },
  {
    id: 17,
    imgSrc:img17,
    destTitle: "TRIVANDRUM",
    location:"India",
    days:"1 Nights/2 Days",
    description:"Zoo, Kovalam Beach, Lake, Temple, Planetarium, Alleppey House Boat & Beach ",
  },
  {
    id: 18,
    imgSrc:img18,
    destTitle: "DELHI - AGRA",
    location:"India",
    days:"7 Nights/8 Days",
    description:"Delhi Local Sight Seen Full Day, Agra Fort, Tajmahal, Fatephur Sikri, Lotus Temple",
  },
  
  
];
const Main = () => {
  const navigate=useNavigate();

  useEffect(()=>{Aos.init({duration:2000})},[])
  return (
    <section className="main container section" id="package">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, days ,description }) => {
          const params={
            id:id,
            imgSrc:imgSrc,
            destTitle:destTitle,
            location:location,
            days:days,
            description:description,
          }
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
                    <span>{days}</span>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className="btn flex" onClick={()=>{navigate('/form',{state:params})}}>DETAILS<FaClipboardCheck className="icon" /></button>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default Main;
