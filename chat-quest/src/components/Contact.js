import React from 'react';
import './Contact.css';

const user = {
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
    name:'Grace Simmons',
    online:true,
};


function Contact () {
    return (
        <div className ="Contact">
            <img className="avatar"
            alt = "myAvatar" src={user.avatar}/>
            <div>
                <h4 className="name">{user.name}</h4>
                <div className="status">
                    <div className={user.online ?'status-online' : 'status-offline'}></div>
                    <p className="status-text">{user.online ?"Online" : "Offline"}</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Contact;