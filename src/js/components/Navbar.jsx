import React from "react"

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark mb-5">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><strong>Start Bootstrap</strong></a>
                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// will Export the Navbar component to other files (Home and Main)
export default Navbar 
