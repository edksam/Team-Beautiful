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
// import GraduateInfo from "./components/graduates/GraduateInfo";
import GraduateEdit from "./components/graduates/GraduateEdit";
import PreviewProfile from "../src/components/graduates/PreviewProfile";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./components/utility/logo.png";

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
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <a href="/" className="navbar-brand">
    //       Graduate Directory
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarToggler"
    //       aria-controls="navbarToggler"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarToggler">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item active">
    //           <NavLink exact className="nav-link" to="/">
    //             Home <span class="sr-only">(current)</span>
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             exact
    //             className="nav-link"
    //             activeClassName="active"
    //             to="/graduates"
    //           >
    //             Graduates
    //           </NavLink>
    //         </li>
    //         {/* <li className="nav-item">
    //           <NavLink
    //             exact
    //             className="nav-link"
    //             activeClassName="active"
    //             to="/graduates/:_id"
    //           >
    //             Graduates Info
    //           </NavLink>
    //         </li> */}
    //       </ul>
    //     </div>
    //   </nav>
    // );

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt=""
          width="60"
          height="30"
          className="d-inline-block align-top"
        />
        Graduate Directory
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav className="navbar-nav ml-auto">
        <LinkContainer to="/graduates">
          <Nav.Link activeClassName="active">Graduates</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/graduates/new">
          <Nav.Link eventKey={2}>Add Graduate</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/graduates" component={GraduateList} />
      <Route exact path="/graduates/new" component={GraduateAdd} />
      <Route exact path="/graduates/:_id" component={PreviewProfile} />
      {/* <Route exact path="/graduates/profile" component={PreviewProfile} /> */}
      <Route exact path="/graduates/:_id/edit" component={GraduateEdit} />
    </Switch>
  );
};

export default App;
