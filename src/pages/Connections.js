import React from "react";
import { Link } from "react-router-dom";

const Connections = () => {
  return (
    <main>
      <section className="connect is-full">
        <h1>Connect with me via...</h1>
        <Link
          to="mailto:laetaiustus@gmail.com"
          alt="link to send K-Leigh an email"
        >
          <article className="note sticky2 email">
            <div className="pin"></div>
            <div className="text"> </div>
          </article>
        </Link>
        <Link
          to="https://www.linkedin.com/in/krista-marbury-4770131ba/"
          alt="link to find K-Leigh on linkedin"
        >
          <article className="note sticky0 linkedin">
            <div className="pin"></div>
            <div className="text"></div>
          </article>
        </Link>
        <Link
          href="https://github.com/KristaMarbury"
          target="_blank"
          alt="link to K-Leigh github"
        >
          <article className="note sticky3 github">
            <div className="pin"></div>
            <div className="text"></div>
          </article>
        </Link>
      </section>
    </main>
  );
};

export default Connections;
