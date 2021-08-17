import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <section className="frame">
        <header>
          {/* Nav Bar */}
          <nav>
            <button className="lined-thick">
              <a href="#aboutme">About Me</a>{" "}
            </button>

            <button className="lined-thick">
              <a href="#projects">Projects!</a>
            </button>

            <button className="lined-thick">
              <a href="#connect">Connect with Me</a>
            </button>
          </nav>
        </header>

        {/* Sticky Notes About Me  */}
        <section className="aboutme is-full">
          <h1>About Me</h1>
          <article className="note sticky1">
            <div className="pin"></div>
            <div className="text">
              Hi! I'm K-Leigh{" "}
              <img
                src="./assets/images/IMG_1133.PNG"
                alt="bitmoji of K-Leigh in shades"
              />
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
          <a
            href="https://docs.google.com/document/d/10-9iMzejHdhmBD7zmAEQlRDQG-YEexpIsFK3DNyJpng/edit?usp=sharing"
            target="_blank"
          >
            <article className="note sticky3">
              <div className="pin"></div>
              <div className="text">
                Click this sticky note to see my resume!{" "}
                <img
                  src="./assets/images/laptopk.png"
                  alt="bitmoji of K-Leigh on a laptop screen"
                />
              </div>
            </article>
          </a>
        </section>

        {/* <!-- Sticky Notes Focused on Recent Projects --> */}
        <section className="projects">
          <h1>Projects!</h1>

          <div className="onesie">
            <a
              href="https://kristamarbury.github.io/CodeQuiz"
              target="_blank"
              alt="link to code quiz live site"
            >
              <article className=" note is-clickable sticky1 pgkhw1">
                <div className="pin"></div>
                {/* <!-- move text to the center of the sticky --> */}
                <div className="text"></div>
              </article>
              <button className="lined-thick">
                <a
                  href="https://github.com/KristaMarbury/CodeQuiz"
                  alt="link to code quiz repo"
                >
                  Code Quiz Repo
                </a>
              </button>
            </a>
          </div>
          <div className="onesie">
            <a
              href="https://team-one-to-rule-them-all.github.io/projectone/"
              target="_blank"
              alt="link to project one live site"
            >
              <article className="note is-clickable sticky3 project1">
                <div className="pin"></div>
                <div className="text"></div>
              </article>
            </a>
            <button className="lined-thick">
              <a
                href="https://github.com/team-one-to-rule-them-all/projectone"
                alt="link to project one repo"
              >
                Project One Repo
              </a>
            </button>
          </div>
          <div className="onesie">
            <a
              href="https://kristamarbury.github.io/WorkDayScheduler/"
              target="_blank"
              alt="link to work day scheduler live site"
            >
              <article className="note is-clickable sticky0 dayplanner">
                <div className="pin"></div>
                <div className="text"></div>
              </article>
            </a>
            <button className="lined-thick">
              <a
                href="https://github.com/KristaMarbury/WorkDayScheduler"
                alt="link to work day scheduler repo"
              >
                Workday Scheduler Repo
              </a>
            </button>
          </div>
          <div className="onesie">
            <a
              href="http://herobattle.herokuapp.com/"
              target="_blank"
              alt="link to mothership squad goals live site"
            >
              <article className="note is-clickable sticky3 project2">
                <div className="pin"></div>
                <div className="text"></div>
              </article>
            </a>
            <button className="lined-thick">
              <a
                href="https://github.com/projecttwocooltoquit/mothershipsquadgoals"
                alt="link to mothership squad goals repo"
              >
                Mothership Squad Goals Repo
              </a>
            </button>
          </div>
        </section>

        {/* <!-- Sticky Notes To Connect with Me --> */}
        <section clas="connect is-full">
          <h1>Connect with me via...</h1>
          <a
            href="mailto:laetaiustus@gmail.com"
            alt="link to send K-Leigh an email"
          >
            <article className="note sticky2 email">
              <div className="pin"></div>
              <div className="text"> </div>
            </article>
          </a>
          <a
            href="https://www.linkedin.com/in/krista-marbury-4770131ba/"
            target="_blank"
            alt="link to find K-Leigh on linkedin"
          >
            <article className="note sticky0 linkedin">
              <div className="pin"></div>
              <div className="text"></div>
            </article>
          </a>
          <a
            href="https://github.com/KristaMarbury"
            target="_blank"
            alt="link to K-Leigh github"
          >
            <article className="note sticky3 github">
              <div className="pin"></div>
              <div className="text"></div>
            </article>
          </a>
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
            and Kombucha{" "}
            <img src="assets/images/codingk.png" alt="smart K-Leigh bitmoji" />
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
