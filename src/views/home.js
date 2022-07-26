import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Happy Go Lucky Clear Yak</title>
        <meta property="og:title" content="website" />
      </Helmet>
      <div className="home-container01">
        <h1>
          <span className="home-text01"> TRANSFORMING FOUNDERS.</span>
          <br></br>
          <span className="home-text03"> ACCELERATING GROWTH.</span>
          <br></br>
          <span className="home-text05"> BUILDING LEGACIES.</span>
        </h1>
        <button className="home-button button">
          <span className="home-text06">
            <span>SCALE NOW</span>
            <span className="home-text08"></span>
          </span>
        </button>
      </div>
      <h1 className="home-text09">SOURCE MEDIA ADVANTAGE​</h1>
      <span className="home-text10">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </span>
      <div className="home-container02">
        <div className="home-container03"></div>
        <h1 className="home-text14">TRANSFORMING IDEAS INTO REALITY​</h1>
      </div>
      <div className="home-blog">
        <div className="home-container04">
          <div className="home-blog-post-card">
            <div className="home-container05">
              <span className="home-text15"></span>
              <span className="home-text16">BUILD</span>
              <span className="home-text17">
                Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed
                non volutpat turpis. ​ Mauris luctus rutrum mi ut rhoncus.
                Integer in dignissim tortor. Lorem ​​ ipsum dolor sit amet,
                consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
        <div className="home-container06">
          <div className="home-blog-post-card1">
            <div className="home-container07">
              <span className="home-text18"></span>
              <span className="home-text19">SCALE</span>
              <span className="home-text20">
                Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed
                non volutpat turpis. ​ Mauris luctus rutrum mi ut rhoncus.
                Integer in dignissim tortor. Lorem ​​ ipsum dolor sit amet,
                consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
        <div className="home-container08">
          <div className="home-blog-post-card2">
            <div className="home-container09">
              <span className="home-text21"></span>
              <span className="home-text22">INVEST</span>
              <span className="home-text23">
                Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed
                non volutpat turpis. ​ Mauris luctus rutrum mi ut rhoncus.
                Integer in dignissim tortor. Lorem ​​ ipsum dolor sit amet,
                consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1>WHY</h1>
      <span className="home-text25">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </span>
      <ul className="list">
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
      </ul>
      <h1 className="home-text26">SUBSCRIBE</h1>
      <div className="home-container10">
        <input type="text" placeholder="Email" className="input" />
        <button className="button">Sign up</button>
      </div>
      <ul className="list">
        <li className="list-item"></li>
      </ul>
      <h1>CONTACT US</h1>
      <input type="text" placeholder="Name" className="input" />
      <input type="text" placeholder="Email" className="input" />
      <input type="text" placeholder="Message" className="input" />
      <button className="home-button2 button">
        <span>
          <span>Send</span>
          <span className="home-text30"></span>
        </span>
      </button>
      <span className="home-text31">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </span>
      <h1 className="home-text32">Source Media Lab</h1>
    </div>
  )
}

export default Home
