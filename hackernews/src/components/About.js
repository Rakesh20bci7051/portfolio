import React from 'react';
import rakeshMehtaImage from './pic.jpg'; // Assuming the image file is in the same directory
import './About.css'; // Import the CSS file

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <img src={rakeshMehtaImage} alt="Rakesh Mehta" className="profile-image" />
      <p>
        Hello and Welcome!, I am Rakesh Mehta, currently pursuring B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence.<br /><br />
        I am interested in Web Development, Data Science, and Coding. My strong areas include Data Structures and Algorithms, Java, Machine Learning, and Deep Learning.
      </p>
    </section>
  );
}

export default About;
