import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import history from "./History";
import Trial from "./Service/Trial";
import ChangePassword from "./Components/ChangePassword";

// export const DataContext = React.createContext();

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </Router>
    
   
  );
}

export default App;
