import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className="container__content bw center">
      <div className="container__content-header">
        <h1 className="dim black b f1 f-headline-ns db mb3 mb4-ns pa3 ph5-ns">Projects</h1>
      </div>
      <div className="container__content-body">
        <div className="pa3 ph5-ns">
          <div className="f6 lh-copy measure dib">
            <p className="f5">Check out my recent projects:</p>
            <p><a href="https://chatapp-trinh.netlify.app/" target="_blank" rel="noreferrer">Chat Application</a> - React, NodeJS, Stream Chat</p>
            <p>Older Projects are on <a href="https://github.com/TrinhNgoc" target="_blank" rel="noreferrer">Github</a></p>
            <p>Websites: <a href="https://www.waimeavalley.net/" target="_blank" rel="noreferrer">Waimea Valley</a> (AirshipCMS), <a href="https://edeninlove.com/" target="_blank" rel="noreferrer">Eden In Love</a> (Shopify), <a href="https://www.maoorganicfarms.org/" target="_blank" rel="noreferrer">Mao Organic Farms</a> (SquareSpace), <a href="https://www.imitours.com/" target="_blank" rel="noreferrer">Imi Tours</a> (ExpressEngine)</p>
          </div>
          <div className="f5 lh-copy measure">
            <p>For more details, here's my Resume</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
