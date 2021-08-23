import React from 'react';

export default function ProgressBar(props) {
  return (
    <div className="progress">
      <span className="skill">
        {props.name} <i className="val">{props.value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={props.value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
