import React from "react"


const Card = ({ title, text, imageUrl }) => {
    return (
        <div className="card mb-4 me-5 col" style={{ width: "18rem" }}> {/* 'card' here is being used in the map f(x) in Home.jsx */ }
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    )
}

export default Card