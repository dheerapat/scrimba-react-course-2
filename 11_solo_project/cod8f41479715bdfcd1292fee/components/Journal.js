import React from "react"

export default function Journal(props) {
    // console.log(props)
    return (
        <div className="journal">
            <img src={props.item.imageUrl} className="journal--img" />
            <div className="detail">
                <i className="fa fa-location-arrow"></i>
                <span className="country">{props.item.location.toUpperCase()}</span>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}