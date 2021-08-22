import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main>
      <section className="projects">
        <h1>Projects!</h1>
        <div className="onesie">
          <Link
            to="https://kristamarbury.github.io/CodeQuiz"
            alt="link to code quiz site"
          >
            <article className=" note is-clickable sticky1 pgkhw1">
              <div className="pin"></div>
              {/* <!-- move text to the center of the sticky --> */}
              <div className="text"></div>
            </article>
            <button className="lined-thick">
              <Link
                to="https://github.com/KristaMarbury/CodeQuiz"
                alt="link to code quiz repo"
              >
                Code Quiz Repo
              </Link>
            </button>
          </Link>
        </div>
        <div className="onesie">
          <Link
            to="https://team-one-to-rule-them-all.github.io/projectone/"
            alt="link to project one live site"
          >
            <article className="note is-clickable sticky3 project1">
              <div className="pin"></div>
              <div className="text"></div>
            </article>
          </Link>
          <button className="lined-thick">
            <Link
              href="https://github.com/team-one-to-rule-them-all/projectone"
              alt="link to project one repo"
            >
              Project One Repo
            </Link>
          </button>
        </div>
        <div className="onesie">
          <Link
            to="https://kristamarbury.github.io/WorkDayScheduler/"
            alt="link to work day scheduler live site"
          >
            <article className="note is-clickable sticky0 dayplanner">
              <div className="pin"></div>
              <div className="text"></div>
            </article>
          </Link>
          <button className="lined-thick">
            <Link
              to="https://github.com/KristaMarbury/WorkDayScheduler"
              alt="link to work day scheduler repo"
            >
              Workday Scheduler Repo
            </Link>
          </button>
        </div>
        <div className="onesie">
          <Link
            to="http://herobattle.herokuapp.com/"
            alt="link to mothership squad goals live site"
          >
            <article className="note is-clickable sticky3 project2">
              <div className="pin"></div>
              <div className="text"></div>
            </article>
          </Link>
          <button className="lined-thick">
            <Link
              to="https://github.com/projecttwocooltoquit/mothershipsquadgoals"
              alt="link to mothership squad goals repo"
            >
              Mothership Squad Goals Repo
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Projects;
