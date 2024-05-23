import React, { useState } from "react";

export default function Friends() {
    // État local pour suivre la valeur de recherche
    const [searchValue, setSearchValue] = useState("");
    // État local pour suivre la liste des amis
    const [friends, setFriends] = useState([
        {
            name: "bucky barnes",
            email: "bucky@example.com",
            status: "f-online",
            avatar: "../images/resources/friend-avatar.jpg"
        },
        {
            name: "Sarah Loren",
            email: "sarah@example.com",
            status: "f-away",
            avatar: "../images/resources/friend-avatar2.jpg"
        },
    ]);

    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="widget friend-list stick-widget">
            <h4 className="widget-title">Friends</h4>
            <div id="searchDir">
                <input
                    type="text"
                    placeholder="Search Friends..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <ul id="people-list" className="friendz-list">
                {filteredFriends.map((friend, index) => (
                    <li key={index}>
                        <figure>
                            <img src={friend.avatar} alt="" />
                            <span className={`status ${friend.status}`}></span>
                        </figure>
                        <div className="friendz-meta">
                            <a href="time-line.html">{friend.name}</a>
                            <i>{friend.email}</i>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}