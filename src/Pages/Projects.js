import React from 'react';
import HeaderAnimation from '../components/HeaderAnimation';
import FadeInLeft from '../components/FadeInLeft';

const Projects = () => {
  return (
    <div>
      <div className="container__content bw center">
      <div className="container__content-header">
        <HeaderAnimation text="Projects"/>
      </div>
      <div className="container__content-body">
        <div className="pa3 ph5-ns">
          <div className="dib">
            <FadeInLeft fontSize="f5" duration="2">
              Check out my recent projects:
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="2.5">
              <a className="link dim green" href="https://chatapp-trinh.netlify.app/" target="_blank" rel="noopener noreferrer">Chat Application</a> - ReactJS, NodeJS, Stream Chat
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="3">
              Older Projects are on <a className="link dim green" href="https://github.com/TrinhNgoc" target="_blank" rel="noopener noreferrer">Github</a>
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="3.5">
            Websites: <a className="link dim green" href="https://www.waimeavalley.net/" target="_blank" rel="noopener noreferrer">Waimea Valley</a> (AirshipCMS), <a className="link dim green" href="https://edeninlove.com/" target="_blank" rel="noopener noreferrer">Eden In Love</a> (Shopify), <a className="link dim green" href="https://www.maoorganicfarms.org/" target="_blank" rel="noopener noreferrer">Mao Organic Farms</a> (SquareSpace), <a className="link dim green" href="https://www.imitours.com/" target="_blank" rel="noopener noreferrer">Imi Tours</a> (ExpressEngine)
            </FadeInLeft>
            {/* <FadeInLeft fontSize="f6" duration="4">
              For more details, here's my Resume
            </FadeInLeft> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects;
