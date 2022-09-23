import React, { Component } from 'react'
import icon from '../icons/news.png'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }
    navCol = {
        background: "#e3f2fd"
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={this.navCol}>
                <div className="container-fluid">
                    <img src={icon} alt="" width="35" height="35" className="d-inline-block align-text-top" />
                    <b>{this.props.title}</b>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/*General Category with home */}
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="button">Search</button>
                            {/* <button className="btn btn-outline-primary" onClick={this.display} type="button">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}