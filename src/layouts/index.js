import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import '../pages/textLink.css'

const Header = () => (
  <div
    style={{
      background: '#52B3D9',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }} className="header-title">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Arian Moslem
        </Link>
      </h1>
    </div>
      <Link 
        className="textLink"
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        About
      </Link>
      <Link 
        className="textLink"
        to="/writing"
        style={{
          textDecoration: 'none',
        }}
      >
        Writing
      </Link>
      <Link 
        className="textLink"
        to="/projects"
        style={{
          textDecoration: 'none',
        }}
      >
        Projects
      </Link>
      <Link 
        className="textLink"
        to="/links"
        style={{
          textDecoration: 'none',
        }}
      >
        Links
      </Link>
      <a 
        href="http://github.com/airrbear" 
        className="textLink"
        style={{
          textDecoration: 'none'
        }}
      >
        Github
      </a>
      <a 
        href="mailto:amoslem678@gmail.com" 
        className="textLink"
        style={{
          textDecoration: 'none'
        }}
      >
        Email
      </a>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Arian Moslem"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper