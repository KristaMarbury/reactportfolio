import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Connections from "./pages/Connections";
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
          <Route exact path="/projects">
            <Projects />
          </Route>

          {/* <!-- Sticky Notes To Connect with Me --> */}
          <Route exact path="/connect">
            <Connections />
          </Route>

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
