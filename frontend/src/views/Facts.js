import React from 'react';

export default function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          {/* <p>Some facts about me</p> */}
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="icofont-hotel-boy"></i>
              <p>
                <strong>I'm an introvert and may seem cool</strong>
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i className="icofont-runner"></i>
              <p>
                <strong>
                  I like sport such as basketball, badminton, &amp; futsal
                </strong>{' '}
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="icofont-education"></i>
              <p>
                <strong>Always want to learn</strong>
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i className="icofont-brainstorming"></i>
              <p>
                <strong>Logical thinking</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
