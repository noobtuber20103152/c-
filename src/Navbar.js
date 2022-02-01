import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/c-">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    C++ Basics
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/basics/Intro">Intro</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/GetStarted">C++ Get Started</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/Syntex">C++ Syntex</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/Output">C++ Output</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/Comments">C++ Comments</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/Variables">C++ Variable</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/Userinputs">C++ User Input</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/Datatypes">C++ Data Types</Link></li>
                                    <li><Link class="dropdown-item" to="/basics/Operators">C++ Operator</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
