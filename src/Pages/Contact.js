import React from 'react';
import FadeInLeft from '../components/FadeInLeft';
import HeaderAnimation from '../components/HeaderAnimation';

const Contact = () => {
  return (
    <div>
      <div className="container__content center">
        <div className="container__content-header">
          <HeaderAnimation text="Contact"/>
        </div>
        <div className="container__content-body">
          <div className="pa3 ph5-ns">
            <FadeInLeft fontSize="f5" duration="2">
              <a className="link dim green" href="mailto:xtrinhngoc@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </FadeInLeft>
            <FadeInLeft fontSize="f5" duration="2.5">
              <a className="link dim green" href="https://www.linkedin.com/in/ngoctrinh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </FadeInLeft>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
