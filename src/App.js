import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotificacionComponent from './components/NotificacionComponent';




import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Tutorial from "./components/tutorial.component"
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            Tutoriales
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorial"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Añadir
              </Link>
            </li>
        
          </div>
        </nav>



        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorial"]} component={TutorialsList} />
            <Route exact path={["/", "/add"]} component={AddTutorial}/>
           
          {/*  <Route exact path="/add" component={AddTutorial} /> */}
          <Route path="/tutorial/:id" component={Tutorial} /> 
          </Switch>
        </div>
        
        <div className="container mt-3"> <NotificacionComponent></NotificacionComponent></div>
        
      
      </div>
    );
  }
}

export default App;
