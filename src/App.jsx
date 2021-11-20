import React, { lazy, Suspense } from "react";
import "./style.css";
import Task from "./pages/Task";
import PubSub from "./pages/PubSub";
import Add from "./pages/Add";
import Count from "./containers/Count";
import MyNavLink from "./components/MyNavLink";
import { Switch, Route, Redirect } from "react-router-dom";
import store from "./redux/store";
import Demo from "./pages/Demo";
import Person from "./pages/Person";
import { SetState } from "./pages/SetState/indexd";

const Github = lazy(() => import("./pages/Github"));
const Student = lazy(() => import("./pages/Student"));

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="nav">
          <MyNavLink to="/task">Task</MyNavLink>
          <MyNavLink to="/student">Student</MyNavLink>
          <MyNavLink to="/github">Github</MyNavLink>
          <MyNavLink to="/count">Count</MyNavLink>
          <MyNavLink to="/reactCount">React Count</MyNavLink>
          <MyNavLink to="/demo">Demo</MyNavLink>
          <MyNavLink to="/state">SetState</MyNavLink>
        </div>

        <div className="content">
          <Suspense fallback={<h1>laoding</h1>}>
            <Switch>
              <Route exact path="/task" component={Task}></Route>
              <Route exact path="/student" component={Student}></Route>
              <Route exact path="/github" component={Github}></Route>
              <Route exact path="/count" component={Add}></Route>
              <Route exact path="/reactCount" component={Count}></Route>
              <Route exact path="/demo" component={Demo}></Route>
              <Route exact path="/state" component={SetState}></Route>
              <Redirect to="/task" />
            </Switch>
          </Suspense>
        </div>

        <div className="bottom">
          <Demo />
          <Person />
        </div>
      </>
    );
  }
}
