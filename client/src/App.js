// import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Home from "./components/pages/Home";
import GraduateList from "./components/graduates/GraduateList";
// import GraduateProfile from "./components/graduates/GraduateProfile";
import GraduateAdd from "./components/graduates/GraduateAdd";
// import GraduateEdit from "./components/graduates/GraduateEdit";
import GraduateInfo from "./components/graduates/GraduateInfo";
// import Logo
import logo from "./images/logo.png"
// import HomePage from "./components/graduates/GraduateHomePage";
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div>
          <Main />
        </div>
      </Router>
    </div>
  );
}

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        {/* the graduate */}
        <img className="logo bg-light rounded" src={logo} alt="header-image" style={{width: "5rem"}}/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/graduates"
            >
              Graduates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/graduates/:_id"
            >
              Graduates Info
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/graduates" component={GraduateList} />
      <Route exact path="/graduates/new" component={GraduateAdd} />
      <Route exact path="/graduates/:_id" component={GraduateInfo} />

      {/* <Route exact path="/graduates/:_id/edit" component={GraduateEdit} /> */}
    </Switch>
  );
};

export default App;
