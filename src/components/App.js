import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from './pages/Home'
import Form from './pages/Form'
import Shop from './pages/Shop'

class App extends Component {
    render() {

        return (
            <Router>
                <div className="container">
                    <Header/>

                    <div className="row">
                        <div className="col-12">
                            <Route exact path="/" component={Home}/>
                            <Route path="/form" component={Form}/>
                            <Route path="/shop" component={Shop}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const Header = () => (
    <div className="header">
        <div className="header-menu">
            <div className="header-menu-item">
                <Link to="/">Home</Link>
            </div>
            <div className="header-menu-item">
                <Link to="/form">Form</Link>
            </div>
            <div className="header-menu-item">
                <Link to="/shop">Shop</Link>
            </div>
        </div>
    </div>
);
export default App


