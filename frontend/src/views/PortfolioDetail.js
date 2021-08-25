/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import data from '../data';
import Header from './Header';

export default function PortfolioDetail(props) {
  const detailId = props.match.params.id;
  const { portfolioList } = data;
  const portfolio = portfolioList.filter(
    (pf) => pf.id === parseInt(detailId)
  )[0];

  return (
    <div>
      <MobileNav></MobileNav>
      <Header></Header>
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>{portfolio.title}</h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>{portfolio.title}</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="portfolio-details-container">
              <div className="owl-carousel portfolio-details-carousel">
                {portfolio.imgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="img-fluid"
                    alt={img.split('/')[5].split('.')[0].replace(/-/g, ' ')}
                  />
                ))}
              </div>
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {portfolio.category}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a
                      href={portfolio.projectURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {portfolio.urlName}
                    </a>
                  </li>
                  <li>
                    <strong>Technologies</strong>: {portfolio.technologies}
                  </li>
                  <li>
                    <a
                      href={portfolio.sourceCode}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icofont-paper-clip"></i> Source Code
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="portfolio-description">
              <h2>Project Description</h2>
              <p>{portfolio.detail}</p>
            </div>
          </div>
        </section>

        <Footer></Footer>

        <BackToTopButton></BackToTopButton>
      </main>
    </div>
  );
}
