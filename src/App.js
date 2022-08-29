import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                </Switch>
            </div>
        </Router>
    );
}

export default App;
