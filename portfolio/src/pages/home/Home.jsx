import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const Home = () => {
  const handleDownload = () => {
    const cvPath = process.env.PUBLIC_URL + "Rupak.pdf";
    window.open(cvPath, "_blank");
  };

  return (
    <div className="back">
      <div className="hero_wrapper">
        <section className="hero_section">
          <img src="profile.png" alt="profileImage" className="profile_pic" />
          <div className="hero_details">
            <div className="name">
              <span className="name_span">Hi, I'm </span>Rupak
            </div>
            <div className="hero_para">
              <p className="para">
                I'm a passionate web development student, I enjoy
                creating interactive and user-friendly websites. My portfolio
                highlights my skills and growth, showcasing projects that
                reflect my learning journey in this exciting field.
              </p>

              <button onClick={handleDownload} className="download_button">
                Download CV
              </button>
            </div>
          </div>
          {/*Routes Link Tag*/}
          {/* <FontAwesomeIcon icon={faAnglesRight} className="icon" /> */}
        </section>
      </div>
    </div>
  );
};

export default Home;
