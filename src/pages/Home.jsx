import React from 'react';
import '../style.css';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <section className="about-container">
      <img src={profile} alt="Profile" className="profile-img" />
      <h1>I'm Trish-Anne Huidem</h1>
      <h2>Web Designer</h2>
      <p>
        With every web design, I strive to bring ideas to life and make them accessible to everyone.
      </p>
    </section>
  );
}
