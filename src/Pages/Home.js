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
            I have been building and designing responsive websites for over 5 years. When I'm not making websites, I'm enjoy drawing, exercising, or playing with my cats Majin and Mugi.
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


