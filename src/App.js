import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import apples from "./images/codingk.png";

function App() {
  return (
    <Router>
      <div className="App">
        <section className="frame">
          <header>
            {/* Nav Bar */}
            <nav>
              <button className="lined-thick">
                <Link to="/">About Me</Link>
              </button>

              <button className="lined-thick">
                <Link to="/projects">Projects</Link>
              </button>

              <button className="lined-thick">
                <Link to="/connect">Connect with Me</Link>
              </button>
            </nav>
          </header>

          {/* Sticky Notes About Me  */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* <!-- Sticky Notes Focused on Recent Projects --> */}
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

          {/* <!-- Sticky Notes To Connect with Me --> */}
          <section clas="connect is-full">
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

          {/* <!-- End of page --> */}
          <article className="note sticky1">
            <div className="pin"></div>
            <div className="text">Thanks for dropping by!</div>
          </article>
          <article className="note sticky2">
            <div className="pin"></div>
            <div className="text">
              Made with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              and Kombucha <img src={apples} alt="smart K-Leigh bitmoji" />
            </div>
          </article>
        </section>
      </div>
    </Router>
  );
}

export default App;
