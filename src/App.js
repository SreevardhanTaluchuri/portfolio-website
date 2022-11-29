import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Hero />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
