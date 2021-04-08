import logo from './logo.svg';
import './App.css';
import React from 'react';
const FormatDate =(props)=>(
    props.date.toLocaleDateString()
);
const Avatar =(props)=>(
    <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
);
const UserInfo=(props)=>(
    <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
);
const Comment =(props)=>(
    <div className="Comment">
              <UserInfo user={props.author} />
              <div className="Comment-text">{props.text}</div>
              <div className="Comment-date">
                <FormatDate date={props.date}/>
              </div>
            </div>
);
export default Comment;
