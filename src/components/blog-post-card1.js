import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.NEW}</span>
        <span className="blog-post-card1-text2">{props.description}</span>
        <div className="blog-post-card1-container1">
          <div className="blog-post-card1-profile"></div>
          <span className="blog-post-card1-text3">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  NEW: 'SCALE',
  label: '',
  time: '5 min read',
}

BlogPostCard1.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  NEW: PropTypes.string,
  label: PropTypes.string,
  time: PropTypes.string,
}

export default BlogPostCard1
