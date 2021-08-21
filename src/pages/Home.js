import React from "react";
import { Link } from "react-router-dom";
import banana from "./../images/IMG_1133.PNG";
import grapes from "./../images/IMG_1119.PNG";

const Home = () => {
  return (
    <main>
      <section className="aboutme is-full">
        <h1>About Me</h1>
        <article className="note sticky1">
          <div className="pin"></div>
          <div className="text">
            Hi! I'm K-Leigh{" "}
            <img src={banana} alt="bitmoji of K-Leigh in shades" />
          </div>
        </article>
        <article className="note sticky0">
          <div className="pin"></div>
          <div className="text">
            <ul>
              <li>I'm currently based in Chicago, IL</li>
              <li>I'm interested in full stack develpment</li>
              <li>Some languages I know are CSS, JavaScript, and MySql</li>
            </ul>
          </div>
        </article>
        <Link
          href="https://docs.google.com/document/d/10-9iMzejHdhmBD7zmAEQlRDQG-YEexpIsFK3DNyJpng/edit?usp=sharing"
          target="_blank"
        >
          <article className="note sticky3">
            <div className="pin"></div>
            <div className="text">
              Click this sticky note to see my resume!{" "}
              <img src={grapes} alt="bitmoji of K-Leigh on a laptop screen" />
            </div>
          </article>
        </Link>
      </section>
    </main>
  );
};

export default Home;
