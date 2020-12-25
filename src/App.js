import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/loader";
import { routes } from "./routes/routes";
function App() {
  const routcomponent = routes.map(({ path, component, id }) => (
    <Route exact path={path} component={component} key={id} />
  ));
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>{routcomponent}</Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
