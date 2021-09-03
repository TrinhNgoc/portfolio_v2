import React from 'react'

const Home = () => {

  return (
    <div className="container__content bw center">
      <div className="container__content-header">
        <h1 className="b f1 f-headline-ns db mb3 mb4-ns pa3 ph5-ns shiny">
          Hello!
        </h1>
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


