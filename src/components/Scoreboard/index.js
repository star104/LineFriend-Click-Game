//render score

import React from "react";
import './scoreboard.css';


function Scoreboard(props){
return(
<div className="row">

      <div className ="col-md-12 scoreboard">
     

        {/* <p>Random Number:{props.randomNumber}</p> */}
        <p>Score:{props.score}</p>
        {/* <p>Tally:{props.tally}</p> */}

      
      
      </div>
      
      </div>


)

}



export default Scoreboard;