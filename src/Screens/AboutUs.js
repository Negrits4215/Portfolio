import React from 'react';
import '../Styles/AboutUs.css'

export default function AboutUs() {
    return (
        <div className="project-container">
          <div className="image-container">
            <img src="https://cdn.liveplan.com/liveplan/content/uploads/2019/04/22121218/LivePlan-Headers-1.jpg" alt="Imagen 1" />
            <img src="https://en.idei.club/uploads/posts/2023-06/1686321194_en-idei-club-p-programing-language-dizain-1.jpg" alt="Imagen 2" />
          </div>
          <div className="text-container">
          <div className="text-content">
          <h1>¡Who am I!</h1>
          <p>
            As a programmer, I leverage my expertise in coding and software development to craft and enhance computer applications. With a Bachelor's degree in Computer Science from the fictional University of Techville, I've honed my skills over the past 8 years, specializing in languages such as Python, Java, and JavaScript. My work spans across a range of exciting projects, including web development, where I create engaging user experiences, as well as data analysis, which involves crunching numbers to reveal valuable insights.
          </p>
          <p>
            With a passion for problem-solving and a knack for staying up to date with the latest industry trends, I'm committed to pushing the boundaries of technology and contributing to the ever-evolving digital landscape.
          </p>
        </div>
          </div>
        </div>
      );
}