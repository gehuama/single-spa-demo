import { Link, Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./component/home.js"
import About from "./component/about.js"
export default function Root(props) {
  return <BrowserRouter basename="/react">
    <div>
      <Link to="/">Home React</Link>
      <Link to="/about">About React</Link>
    </div>
    <Switch>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  </BrowserRouter>
  return <section>{props.name} is mounted!</section>;
}
