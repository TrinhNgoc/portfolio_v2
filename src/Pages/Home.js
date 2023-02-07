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
            A front end sailor scout, using the magic of code to bring their designs to life and defend the internet against boredom and blandness. With a constant drive to learn and grow, I am always seeking new ways to unleash their full potential and make the web a more wondrous place.
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


