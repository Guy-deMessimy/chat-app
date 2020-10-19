import React, { Component } from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            online: false,
        };
    }
    render () {
        return (
            <div className ="Contact">
                <img className="avatar"
                alt = "myAvatar" src={this.props.avatar}/>
            <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status">
                    <div className={this.state.online ?'status-online' : 'status-offline'}
                        onClick={event =>{
                            const newOnline = !this.state.online;
                            this.setState({online:newOnline})
                        }}
                    >
                    </div>
                    <p className="status-text"    
                        onClick={event =>{
                            const newOnline = !this.state.online;
                            this.setState({online:newOnline})
                        }}
                    >{this.state.online ?"Online" : "Offline"}
                    </p>   
                </div>
            </div>
            </div>
        );   
    }    
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };    
export default Contact