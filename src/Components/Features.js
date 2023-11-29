import React from "react";
import "./Features.css";
import {AiFillCheckCircle} from "react-icons/ai";
import {FaBell} from "react-icons/fa"

function Features (){
    return (
        <section>
            <div className="features">
                <div><FaBell className="head-icon"/></div>
             <h5 className="sub-title1">Instant Payment Collection</h5>   
             <h2 className="title1">Dedicated Payment Pages</h2>
             <p className="contents">Generate custom payment pages easily to collect payments for various purposes. Say goodbye to the hassles of traditional payment methods and start accepting payments seamlessly. Learn more...</p>
             <ul className="list">

                <li className="feature-list"><div><AiFillCheckCircle color="#055C2D"/></div><div> Accepted all Major Cards</div>
                </li>
                
                <li className="feature-list"><div><AiFillCheckCircle color="#055C2D"/></div><div>Customizable and Mobile Friendly</div>
                </li>
                
                <li className="feature-list"><div><AiFillCheckCircle color="#055C2D"/></div><div>Real Time Notification</div>
                </li>
             </ul>
             <div className="feature-img"> 
             </div>
            </div>
        </section>
    )
}





export default Features
