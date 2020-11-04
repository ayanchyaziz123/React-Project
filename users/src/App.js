import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './components/users/AddUser';

function App() {
  return (
    <Router>
      <div className="App">
     <Navbar/>
     <switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/users/add" component={AddUser}/>
     </switch>
    </div>
    </Router>
  );
}

export default App;
