import React from "react";
import Link from "gatsby-link";

const Links = () => (
  <div
    style={{
      color: "white"
    }}
  >
    <div
      style={{
        marginBottom: "1.45rem"
      }}
    />
    <h2>Links I found useful</h2>
    <h3>Youtube Links</h3>
    <p>
      -{" "}
      <a
        href="https://www.youtube.com/channel/UC3QLHt6mHfmg4x_h2am7ecg"
        className="bodyLink"
      >
        Sesh Venugopal
      </a>, Professor at Rutgers University with a lot of useful vieos on data
      structures.<br />
      -{" "}
      <a href="https://www.youtube.com/user/patrickJMT" className="bodyLink">
        PatrickJMT
      </a>, Former Math Instructor who makes videos explaining topics. Useful
      for catching up in classes and learning many other cool topics
    </p>
    <h3>Web Links</h3>
    <p>
      -{" "}
      <a
        href="https://github.com/angrave/SystemProgramming/wiki"
        className="bodyLink"
      >
        Systems Programming Notes
      </a>, Useful for learning Systems Programming and catching up in class for
      every missed lecture. Also a useful resource for learning C<br />
      -{" "}
      <a href="http://www.diveintopython3.net/" className="bodyLink">
        Dive Into Python3 Book
      </a>, Available for free on the web, this book is how I learned python 3.
      It goes over refactoring, unit testing, regular expressions, and many
      other useful built in python tools.<br />
      -{" "}
      <a href="https://techdevguide.withgoogle.com/" className="bodyLink">
        Google's Tech Development Guide
      </a>, Very useful for practicing common interview questions and finding resources to grow your tech skills<br />
    </p>
  </div>
);

export default Links;
