import React from "react";
import "./FeaturesII.css";
import {AiFillCheckCircle} from "react-icons/ai";


function FeaturesII () {
    return (
        <div className="featuresii">
<           div>
                  <div className="featuresii-img"></div>
                <h5 className="sub-title2">Effortless Event Ticketing</h5>
                <h2 className="title2">Create, Manage, and Sell Tickets for Unforgetable Events</h2>
                <p className="other1">Our event management feature empowers you to effortlessly create and manage Physical and Virtual events while seamlessly collecting payments for tickets. Take your event planning to new heights with CampusPay. Learn more..</p>
                  <ul className="list2">

                <li className="feature-list"><div><AiFillCheckCircle color="#055C2D"/></div><div> Customizable Event Pages</div>
                </li>
                
                <li className="feature-list"><div><AiFillCheckCircle color="#055C2D"/></div><div>Online Ticket Sales</div>
                </li>
                
                <li className="feature-list"><div><AiFillCheckCircle color="#055C2D"/></div><div>Attendee Management</div>
                </li>
             </ul>
            </div>
        </div>
    )
}


export default FeaturesII