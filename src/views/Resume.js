/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          {/* <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p> */}
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Informatic Engineer</h4>
              <h5>2014 - 2018</h5>
              <p>
                <em>Universitas Surabaya (UBAYA), Surabaya, East Java</em>
              </p>
              <p>
                I graduated with GPA 3.902 and labeled with the Summa Cum Laude
                predicate. And I was also active in some student organizations
                during college.
              </p>
            </div>

            <h3 className="resume-title">Course</h3>
            <div className="resume-item pb-0" id="resume-course-dicoding">
              <h4>
                <a href="#resume-course-dicoding" class="certificate-link">
                  Back End Developer Course
                </a>
              </h4>
              <h5>2021</h5>
              <p>
                <em>A course of study offered by Dicoding.</em>
              </p>
              <p> There are 3 of 6 courses that I have completed: </p>
              <ul>
                <li>
                  <a
                    href="https://www.dicoding.com/certificates/72ZD2RVGJZYW"
                    target="_blank"
                    rel="noreferrer"
                    class="certificate-link"
                  >
                    Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dicoding.com/certificates/JLX116DGGX72"
                    target="_blank"
                    rel="noreferrer"
                    class="certificate-link"
                  >
                    Belajar Dasar Pemrograman JavaScript
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dicoding.com/certificates/N9ZOD8M40PG5"
                    target="_blank"
                    rel="noreferrer"
                    class="certificate-link"
                  >
                    Belajar Membuat Aplikasi Back-End untuk Pemula
                  </a>
                </li>
              </ul>
            </div>

            <div className="resume-item pb-0">
              <h4>
                <a
                  href="https://courses.edx.org/certificates/140b92865bc7456cabfafe75246d5ca0"
                  target="_blank"
                  rel="noreferrer"
                  class="certificate-link"
                >
                  SD4X: Programming for the Web with JavaScript
                </a>
              </h4>
              <h5>Jun - Sep 2020</h5>
              <p>
                <em>
                  A course of study offered by PennX, an online learning
                  initiative of the University of Pennsylvania.
                </em>
              </p>
              <p>
                The lessons taught in this course are ES6, jQuery, React JS,
                Node JS. The certificate issued September 22, 2020.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>ICT Programmer</h4>
              <h5>2020 - Present</h5>
              <p>
                <em>PT. Ciputra Development Tbk</em>
              </p>
              <ul>
                <li>
                  Develop Ciputra Information System especially HCIS (Human
                  Capital Information System). There are around 2.800 active
                  users right now.
                </li>
                <li>
                  Maintain the system either back end or front end and create
                  modules by user requests
                </li>
                <li>
                  Bug fixes, support &amp; troubleshooting to the promblems that
                  came out regarding to the program
                </li>
                <li>
                  Using PHP with Codeigniter (CI) Framework to develop almost of
                  the system and MySQL as the database and also using GIT for
                  code versioning
                </li>
                <li>
                  Develop &amp; maintain cron jobs with PHP which runs with the
                  windows task scheduler
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>IT STAFF</h4>
              <h5>2017 - 2018</h5>
              <p>
                <em>PT. Tirtakencana Tatawarna (AVIAN BRANDS)</em>
              </p>
              <ul>
                <li>Maintain and create reporting program as macro excel</li>
                <li>
                  Maintain database of HRIS (Human Resource Information System)
                  and supervise the system with the vendor
                </li>
                <li>Using Visual Basic and SQL Server as the database</li>
                <li>
                  Do some analysis related to the problems that occur to users
                  and program, determine the steps to solve the problem
                </li>
                <li>
                  Coordinating with other divisions related to the program being
                  made.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
