import React from "react";
import "./card.css";
function Card(props) {

    return (
        <div 
            style={{ backgroundImage: `url(${props.image})` }}
            key={props.id}
            className="line-card col-md-4" 
            onClick={() => props.handleClicked(props.id)}
        >
            {/* {linefriend.name}    */}


        </div>

    )

}


export default Card;