import React from 'react'
import Link from 'gatsby-link'
import './textLink.css'

const IndexPage = () => (
  <div
    style={{
      color: 'white',
    }}
  >
    <div
      style={{
        marginBottom: '1.45rem',
      }}
    >
    </div>
    <p>I'm a student at Rutgers University studying Computer Science and minoring in Philosophy & Mathematics</p>
    <p>My favorite hobbies include raquetball, attending hackathons, running, and reading!</p>
    <p>You can find my goodreads account <a 
      href="https://www.goodreads.com/user/show/69086140-arian-moslem"
      className="bodyLink"
    >
      here
    </a>, if you're interested in what books I'm currently reading</p>
    <p>I'm interested in Education Technology, Water Conservation, Improving the World's average Living Conditions, and Entrepreneurship</p>
    <p>This website is built with ReactJS(Using Gatsby)</p>
  </div>
)

export default IndexPage