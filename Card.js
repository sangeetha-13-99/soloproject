import React from "react";
import ReactDom from "react-dom";

export default function Card(props){
    console.log(props.imageUrl)
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.imageUrl} />
            </div>
            <div className="card-details">
                <div className="place-details">
                    <img src="./Map.svg"/>
                    <span className="place-location">{props.location}</span>
                    <a className="place-url" href={props.googleMapsUrl}>View On Google Maps</a>
                </div>
                <h3 className="place-title">{props.title}</h3>
                <p className="place-date">{props.startDate}-{props.endDate}</p>
                <p className="place-description">{props.description}</p>
            </div>
        </div>
    )
}