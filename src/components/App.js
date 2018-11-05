import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from './pages/Home'
import Form from './pages/Form'

class App extends Component {
    render() {

        return (
            <Router>
                <div className="container">
                    <Header/>

                    <div className="jumbotron">
                        <h1>Hello World</h1>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Route exact path="/" component={Home}/>
                            <Route path="/form" component={Form}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const Header = () => (
    <div className="header">
        <ul className="header-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/form">Form</Link>
            </li>
        </ul>
    </div>
);
export default App


