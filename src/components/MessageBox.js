import React from 'react';

export default function MessageBox({ variant, children }) {
  return <div className={`${variant}-message`}>{children}</div>;
}
