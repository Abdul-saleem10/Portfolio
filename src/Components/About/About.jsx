import React from "react";
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiOutlineUser} from 'react-icons/ai'
import ME from "../../assets/me-about.jpg";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
                <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
                <small>10+ Completed</small>
            </article>
            <article className="about_card">
              <AiOutlineUser className="about_icon"/>
              <h5>Skill</h5>
                <small>Fullstack Developer</small>
            </article>
          </div>
          <p>
          Software developer with 2+years of experience in React js, html,css,js, java and spring boot currently living in Bengaluru / Bangalore. looking for a oportunity where I can improve my skills in the development of the company.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
