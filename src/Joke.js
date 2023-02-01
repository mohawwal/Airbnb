import React from "react";

function Joke(props) {
   return(
    <div>
        <p>{props.num}</p>
        {props.setup && <p>setup:-{props.setup}</p>}
        <h4>{props.punchline}</h4>
        <hr></hr>
    </div>
   )
}

export default Joke;