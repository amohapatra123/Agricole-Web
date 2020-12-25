import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/loader";
import { routes } from "./routes/routes";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { NoteProvider } from "./context/noteContext";
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
                      <h3>Dashboard</h3>
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
                <NoteProvider>{routcomponent}</NoteProvider>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
