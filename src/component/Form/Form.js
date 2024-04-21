import React from "react";
import "../Navbar/navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Form.css";
import Footer from "../Footer/Footer";
import axios from "axios";

const Form = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const data = location.state;
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    destination: "",
    boardingPoint: "",
    dateStart: "",
    dateEnd: "",
    adult: "",
    child: "",
    occasion: "",
    hotelType: "",
    travelMode: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await axios.post("http://localhost:3001/api", formData);
      if (response.data.msg === "Mail sent successfully!") {
        setFormData({
          name: "",
          number: "",
          email: "",
          destination: "",
          boardingPoint: "",
          dateStart: "",
          dateEnd: "",
          adult: "",
          child: "",
          occasion: "",
          hotelType: "",
          travelMode: "",
          message: "",
        });
        console.log("Form Data after Submit", setFormData);
        alert("Form submitted successfully!");
      } else {
        console.log("Form Data after Submit", setFormData);
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a
              className="logo flex"
              onClick={() => {
                navigate(-1);
              }}
            >
              <h1>
                <SiYourtraveldottv className="icon" /> VOYAGE VISTA
              </h1>
            </a>
          </div>
        </header>
      </section>
      <section className="form_container flex">
        <div className="left container">
          <div className="image_div">
            <img src={data.imgSrc} alt={data.destTitle} />
          </div>

          <h3>Destination : {data.destTitle}</h3>
          <p>Duration : {data.days}</p>
          <p>Locations : {data.description}</p>
        </div>

        <div className="right container">
          <h2>Embark on a Personalized With Us</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Your Number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Your Destination"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="boardingPoint"
                name="boardingPoint"
                placeholder="Type Your Boarding Point"
                value={formData.boardingPoint}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                id="dateStart"
                name="dateStart"
                placeholder="Date Start"
                value={formData.dateStart}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                id="dateEnd"
                name="dateEnd"
                placeholder="Date End"
                value={formData.dateEnd}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                id="adult"
                name="adult"
                placeholder="Number of Adults"
                value={formData.adult}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="child"
                name="child"
                placeholder="Number of Children"
                value={formData.child}
                onChange={handleChange}
                required
              />

              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
              >
                <option value="">Choose Occasion</option>
                <option value="Adventure Tour">Adventure Tour</option>
                <option value="Corporate Tour">Corporate Tour</option>
                <option value="Industrial Visit Tour">
                  Industrial Visit Tour
                </option>
                <option value="Group Tour">Group Tour</option>
                <option value="Pilgrimage Tour">Pilgrimage Tour</option>
                <option value="Escorted Tour">Escorted Tour</option>
                <option value="ON Spot Study">ON Spot Study</option>
                <option value="Honeymoon Tour">Honeymoon Tour</option>
                <option value="Staff Tour">Staff Tour</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="hotelType"
                name="hotelType"
                value={formData.hotelType}
                onChange={handleChange}
                required
              >
                <option value="">Choose Hotel Type</option>
                <option value="5*Star">5*Star</option>
                <option value="4*star">4*star</option>
                <option value="3*star">3*star</option>
                <option value="2*star">2*star</option>
                <option value="1*star">1*star</option>
              </select>

              <select
                id="travelMode"
                name="travelMode"
                value={formData.travelMode}
                onChange={handleChange}
                required
              >
                <option value="">Choose Travel Mode</option>
                <option value="Bus">Bus</option>
                <option value="Van">Van</option>
                <option value="Train">Train</option>
                <option value="Car">Car</option>
                <option value="Flight">Flight</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Form;
