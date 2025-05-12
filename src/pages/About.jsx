import React from 'react';
import '../style.css';
import profile from '../assets/profile.jpg'; 

export default function About() {
  return (
    <section className="about-container">
       <div className="about-text">
       <img src={profile} alt="Profile" className="profile-img" />
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Trish-Anne Huidem</strong>, a web designer driven by creativity and a passion
            for elegant design. I love turning ideas into clean, user-friendly web interfaces using modern tools
            like React, HTML, and CSS.
          </p>
          <p>
            I aim to blend technical skills with visual storytelling — and my favorite themes involve rich,
            warm tones like <strong>gold</strong> and <strong>chocolate brown</strong>. Outside of coding, I enjoy
            exploring design trends, sipping coffee, and sketching new UI ideas.
          </p>
        </div>
    </section>
  );
}
