/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function SocialLink(props) {
  return (
    <div className="my-social-links mt-3 text-center">
      {props.socialMedia &&
        props.socialMedia.map((media, index) => (
          <a key={index} href={media.link} className={media.name}>
            <i className={`bx bxl-${media.name}`}></i>
          </a>
        ))}
    </div>
  );
}
