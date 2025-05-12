import React from 'react';
import '../style.css';

export default function Projects() {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>Projects</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', textAlign: 'left' }}>
          <li>✨ <strong>Portfolio Website</strong> – A responsive React site to showcase my skills.</li>
          <li>📦 <strong>Task Tracker</strong> – A sleek to-do app using local storage and state.</li>
          <li>🌐 <strong>API Integration</strong> – Fetch and display data from public APIs in real-time.</li>
        </ul>
      </div>
    </section>
  );
}
