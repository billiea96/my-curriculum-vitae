import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('Billie Arianto');
  const [profession, setProfession] = useState('Software Developer');
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>{name}</h1>
        <p>
          I'm a <span className="typed" data-typed-items={profession}></span>
        </p>
      </div>
    </section>
  );
}
