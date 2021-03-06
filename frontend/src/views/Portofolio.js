import React from 'react';
import data from '../data';

export default function Portofolio() {
  const { portfolioList } = data;
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            These are my some projects. I have built them with various languages
            which are Node JS, React JS, Codeigniter, and ever also with laravel
          </p>
        </div>

        {/* <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfolioList &&
            portfolioList.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item ${item.groupFilter}`}
              >
                <div className="portfolio-wrap">
                  <img
                    src={item.src}
                    className="img-fluid"
                    alt={item.src
                      .split('/')[5]
                      .split('.')[0]
                      .replace(/-/g, ' ')}
                  />
                  <div className="portfolio-links">
                    <a
                      href={item.display}
                      data-gall="portfolioGallery"
                      className="venobox"
                      title={item.title}
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href={`/portfoliodetail/${item.id}`}
                      title="More Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
