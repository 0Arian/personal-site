import React from 'react'
import Link from 'gatsby-link'
import './textLink.css'

const IndexPage = () => (
  <div>
    <div
      style={{
        marginBottom: '1.45rem',
      }}
    >
    </div>
    <h2>Hi I'm Arian</h2>
    <p>I'm a student at Rutgers University studying Computer Science and minoring in Philosophy & Mathematics</p>
    <p>My favorite hobbies include raquetball, running, reading, and attending hackathons!</p>
    <p>You can find my goodreads account <a 
      href="https://www.goodreads.com/user/show/69086140-arian-moslem"
      className="bodyLink"
    >here
    </a></p>
    <p>I'm interested in Education Technology, Improving the World's average Living Conditions, Venture Capital, and Entrepreneurship</p>
  </div>
)

export default IndexPage
