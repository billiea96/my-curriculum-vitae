import React from 'react';
import ProgressBar from '../components/ProgressBar';

export default function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            This is my skills that I have used mostly in last 3 years or i've
            been absorbed to learn currently especially Node JS, React JS, &amp;
            Mongoose.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-4" data-aos="fade-up">
            <ProgressBar name="HTML" value="90"></ProgressBar>
            <ProgressBar name="CSS" value="70"></ProgressBar>
            <ProgressBar name="JavaScript" value="90"></ProgressBar>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <ProgressBar name="PHP with CodeIgniter" value="90"></ProgressBar>
            <ProgressBar
              name="Node JS with Express JS"
              value="70"
            ></ProgressBar>
            <ProgressBar name="React JS" value="70"></ProgressBar>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            {/* <ProgressBar name="PHP with Laravel" value="50"></ProgressBar> */}
            <ProgressBar name="MySQL" value="90"></ProgressBar>
            <ProgressBar name="MongoDB/Mongoose" value="70"></ProgressBar>
          </div>
        </div>
      </div>
    </section>
  );
}
