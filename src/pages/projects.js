import React from "react";
import Link from "gatsby-link";
import "./textLink.css";

const projects = () => (
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
    <div>
      <h2>
        <a className="bodyLink" href="https://github.com/AirrBear/alienmenu">
          AlienMenu
        </a>
      </h2>
      <p>
        A simple dock application to quickly access reddit content. App is built
        with Electron, and UI is built with ReactJS.
      </p>
      <div>
        <img
          src="https://camo.githubusercontent.com/c0ae2e5166d827b9a5f0d97c8fe1929c71bb0eb0/68747470733a2f2f692e696d6775722e636f6d2f676b7739546b352e706e67"
          alt=""
          height="600"
          width="240"
        />
      </div>
    </div>
    <div>
      <h2>
        <a className="bodyLink" href="https://github.com/ARM-open/Graphite">
          Graphite
        </a>
      </h2>
      <p>
        A tool for scraping google analytics data and generating a meaningful
        report for your usage data.
      </p>
      <img
        src="https://camo.githubusercontent.com/52e26fc8b1a0add5d051b76f5ec827bc6a956f88/687474703a2f2f692e696d6775722e636f6d2f794972446d45632e706e67"
        alt=""
        height="622"
        width="526"
      />
    </div>
    <div>
      <h2>
        <a className="bodyLink" href="https://github.com/AirrBear/PicGenie">
          PicGenie
        </a>
      </h2>
      <p>
        WenApp that takes picture input through sms(text message) and responds
        with a wikipedia definition of what's in the picture.
      </p>
    </div>
  </div>
);

export default projects;
