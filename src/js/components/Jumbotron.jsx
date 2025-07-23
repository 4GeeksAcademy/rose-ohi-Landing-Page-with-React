import React from "react"

const Jumbotron = () => {
    return (
        <div className="container">
        <div className="jumbotron text-start p-5 mb-4 bg-light text-dark">
            <h1 className="display-4 text-muted"><strong>Welcome to Our Landing Page</strong></h1>
            <p className="lead">This is a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
        </div>
    );
}

// will Export the Jumbotron component to Home.jsx
export default Jumbotron;