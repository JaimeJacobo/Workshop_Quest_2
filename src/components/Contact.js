import React from 'react';
import './Contact.scss';

const Contact = (props)=>{
  return(
    <div className="Contact">
      <img src={props.image} alt={props.name} className="avatar"/>
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
            {
              props.onlineStatus
              ? <div>
                  <div className="status-online"></div>
                  <p className="status-text">online</p>
                </div>
              : <div>
                  <div className="status-offline"></div>
                  <p className="status-text">offline</p>
                </div>
            }
        </div>
      </div>
    </div>
  )
}


export default Contact



