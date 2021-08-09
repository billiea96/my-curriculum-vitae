/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';
import SocialLink from '../components/SocialLink';

export default function Header() {
  const [name, setName] = useState('Billie Arianto');
  const socialMedia = [
    {
      name: 'facebook',
      link: '#',
    },
    {
      name: 'instagram',
      link: '#',
    },
    {
      name: 'linkedin',
      link: '#',
    },
  ];
  const navMenu = [
    {
      label: 'Home',
      link: 'index.html',
      iconName: 'bx-home',
      isActive: 1,
    },
    {
      label: 'About',
      link: '#about',
      iconName: 'bx-user',
      isActive: 0,
    },
    {
      label: 'Resume',
      link: '#resume',
      iconName: 'bx-file-blank',
      isActive: 0,
    },
    {
      label: 'Portofolio',
      link: '#portofolio',
      iconName: 'bx-book-content',
      isActive: 0,
    },
    {
      label: 'Services',
      link: '#services',
      iconName: 'bx-server',
      isActive: 0,
    },
    {
      label: 'Contact',
      link: '#contact',
      iconName: 'bx-envelope',
      isActive: 0,
    },
  ];
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src="/assets/img/my-profile.jpg"
            alt="Profile"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a href="index.html">{name}</a>
          </h1>
          <SocialLink socialMedia={socialMedia}></SocialLink>
        </div>

        <NavMenu navMenus={navMenu}></NavMenu>
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  );
}
