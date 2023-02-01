import React from "react";

export default function card(props) {
    return(
        <div className="card">
            <img src={props.img} className="card-img" alt="pic"/>
            <div className="card-stats">
                <nav>
                    <img src={props.star} alt="star" className="card-star"/>
                    <span>{props.rate}</span>
                </nav>
                <span className="grey"> {props.txt} ٠ </span>
                <span className="grey">USA</span>
            </div>
            <p>{props.comment}</p>
            <p><span className="bold">{props.price}</span> / Person</p>
        </div>
    )
}