import React from "react";

export default function Following(props) {
    return (
        <div className="widget stick-widget">
            <h4 className="widget-title">Who's following</h4>
            <ul className="followers">
                <li>
                    <figure><img src={props.img} alt="" /></figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">{props.firstname} {props.lastname}</a></h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}
