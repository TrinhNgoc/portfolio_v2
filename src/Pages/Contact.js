import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container__content center bg-white-30">
        <div className="container__content-header">
          <h1 className="dim black b f1 f-headline-ns db mb3 mb4-ns pa3 ph5-ns shiny">Contact</h1>
        </div>
        <div className="container__content-body">
          <div className="pa3 ph5-ns">
            <p className="f5 lh-copy measure">
              <a href="mailto:xtrinhngoc@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </p>
            <p className="f5 lh-copy measure">
              <a href="https://www.linkedin.com/in/ngoctrinh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
