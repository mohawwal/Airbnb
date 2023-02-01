import React from "react";

export default function Contact(props) {
    return(
        <div className="Whole">
            <div className='contact-card'>
            <div className='Top'>
                <img src={props.img} alt=""/>
            </div>
            <h3>{props.name}</h3>
            <div className='info-group'>
            <div className='Buttom'>
              <img src="\box.jpg" alt="" />
              <p>{props.number}</p>
            </div>
            <div className='Buttom'>
              <img src="\box.jpg" alt="" />
              <p>{props.mail}</p>
            </div>
            </div>
            </div>
        </div>
    )
}



