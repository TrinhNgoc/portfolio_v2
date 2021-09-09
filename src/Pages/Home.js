import React from 'react';
import Sparkles from 'react-sparkle';

const Home = () => {

  return (
    <div className="container__content bw center bg-white-30">
      <div className="container__content-header">
        <span className="relative">
          <h1 className="b f1 f-headline-ns db mb3 mb4-ns pa3 ph5-ns shiny">
            <span>
              Hello!
            </span>
          </h1>
          <Sparkles
            color="#ffdf00"
            count={10}
            minSize={5}
            maxSize={15}
            overflowPx={30}
            fadeOutSpeed={10}
            newSparkleOnFadeOut={true}
            flicker={true}
          />
        </span>
      </div>
      <div className="container__content-body">
        <div className="pa3 pa5-ns">
          <p className="f5 lh-copy measure">
            Jenny Nguyen. Frontend Developer. Honolulu, Hawaii.
          </p>
          <p className="f6 lh-copy measure">
            I build and design responsive websites for over 5 years. When I'm not making websites, I'm either drawing, working out, or playing with my cats.
          </p>
          <p className="f6 lh-copy measure">
            This portfolio is inspired by the Sailor Moon Crystal Eyecatch. An eyecatch is a scene or illustration used to begin and end a commercial break on Japanese TV shows.
          </p>
          <p className="f6 lh-copy measure">
            Built with React, React Routers, Tachyons, and Photoshop for images.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home


