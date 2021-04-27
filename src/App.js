import React from "react";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";


//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import About from "./pages/About";
//Import Nav Component
import Nav from "./components/Nav";

//Router
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
      <Route path="/" exact>
        <About />
      </Route>
      <Route path="/work">
         <MyWork />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
