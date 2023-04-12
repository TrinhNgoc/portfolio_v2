import React from 'react';
import HeaderAnimation from '../components/HeaderAnimation';
import FadeInLeft from '../components/FadeInLeft';

const Home = () => {

  return (
    <div className="container__content bw center">
      <div className="container__content-header">
        <HeaderAnimation text="Hello!"/>
      </div>
      <div className="container__content-body">
        <div className="pa3 ph5-ns">
          <FadeInLeft fontSize="f5" duration="2">
            Jenny Nguyen. Frontend Developer. Honolulu, Hawaii.
          </FadeInLeft>
          <FadeInLeft fontSize="f5" duration="2.5">
          I design and develop visually appealing websites and applications that are responsive and user-friendly. My focus is on creating the best possible user experience, and I strive to keep up with the latest trends and technologies to achieve that goal.
          </FadeInLeft>
          <FadeInLeft fontSize="f5" duration="3">
            This portfolio is inspired by the Sailor Moon Crystal Eyecatch. An eyecatch is a scene or illustration used to begin and end a commercial break on Japanese TV shows.
          </FadeInLeft>
          <FadeInLeft fontSize="f5"duration="3.5">
            Built with React, React Routers, Tachyons, and Framer Motion.
          </FadeInLeft>
        </div>
      </div>
    </div>
  )
}

export default Home;


