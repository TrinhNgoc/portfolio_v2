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
              I am currently learning Three.js, so here's what I learned so far: <a className="link dim green" href="https://replit.com/@Trinh-Ngoc" target="_blank" rel="noopener noreferrer">(Also on Replit)</a>
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="2.5">
              <a className="link dim green" href="https://threejs-galaxy-generator.trinh-ngoc.repl.co/" target="_blank" rel="noopener noreferrer">Galaxy Generator</a>
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="2.5">
              <a className="link dim green" href="https://threejs-scroll-based-animation.trinh-ngoc.repl.co/" target="_blank" rel="noopener noreferrer">Scroll-based Animation</a>
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="2.5">
              <a className="link dim green" href="https://threejs-shadows.trinh-ngoc.repl.co/" target="_blank" rel="noopener noreferrer">Animation, Lights, and Shadows</a>
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="2.5">
              <a className="link dim green" href="https://webgl-3d-text-seven-delta.vercel.app/" target="_blank" rel="noopener noreferrer">3D Text</a> - Vercel, Vite
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="3">
              Older Projects are on <a className="link dim green" href="https://github.com/TrinhNgoc" target="_blank" rel="noopener noreferrer">Github</a>
            </FadeInLeft>
            <FadeInLeft fontSize="f6" duration="3.5">
            Websites: <a className="link dim green" href="https://www.waimeavalley.net/" target="_blank" rel="noopener noreferrer">Waimea Valley</a> (formerly on AirshipCMS, now on SquareSpace), <a className="link dim green" href="https://edeninlove.com/" target="_blank" rel="noopener noreferrer">Eden In Love</a> (Shopify), <a className="link dim green" href="https://www.maoorganicfarms.org/" target="_blank" rel="noopener noreferrer">Mao Organic Farms</a> (SquareSpace), <a className="link dim green" href="https://www.imitours.com/" target="_blank" rel="noopener noreferrer">Imi Tours</a> (ExpressEngine)
            </FadeInLeft>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}



export default Projects;
