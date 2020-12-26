import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/loader";
import { routes } from "./routes/routes";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { NoteProvider } from "./context/noteContext";
import { ShareProvider } from "./context/shareContext";
function App() {
  const routcomponent = routes.map(({ path, component, id }) => (
    <Route exact path={path} component={component} key={id} />
  ));
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Row>
            <Col md={{ size: 2 }} id="sidebar">
              <aside>
                <ul>
                  <Link to="/">
                    <li id="highlight">
                      <h3>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 12V0H36V12H20ZM36 36H20V16H36V36ZM0 36H16V24H0V36ZM16 20H0V0H16V20Z"
                            fill="white"
                          />
                        </svg>
                        Dashboard
                      </h3>
                    </li>
                  </Link>
                  <Link to="/page2">
                    <li>
                      <h3>Page2</h3>
                    </li>
                  </Link>
                </ul>
              </aside>
            </Col>
            <Col>
              <Switch>
                <ShareProvider>
                  <NoteProvider>{routcomponent}</NoteProvider>
                </ShareProvider>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
