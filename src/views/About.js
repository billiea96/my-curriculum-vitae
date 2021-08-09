import React, { useState } from 'react';

export default function About() {
  const [profession, setProfession] = useState('Software Engineer');
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          {/* <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p> */}
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src="assets/img/my-profile.jpeg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{profession}</h3>
            <p className="font-italic">
              My name is Billie Arianto. I'm a {profession}. I am from Lamongan,
              but I live in Surabaya right now. And this is my profile.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Birthday:</strong> 19 April 1996
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Website:</strong> www.example.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Phone:</strong> +6285852329189
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>City:</strong> Surabaya, East Java, Indonesia
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Age:</strong> 25
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Degree:</strong> Bachelor Degree
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>E-mail:</strong> billiea48@gmail.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
