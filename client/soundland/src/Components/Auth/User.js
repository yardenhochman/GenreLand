import React, {Component} from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(){
        super();
        this.state ={
            user_id: this.props.user_id,
            eventsAttending: null,
        }
        this.renderUserEvents = this.renderUserEvents.bind(this)
        this.renderUserAttendingEvents = this.renderUserAttendingEvents.bind(this)
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: `http://localhost:3001/profile/${this.state.user_id}`,
        })
        .then(rez =>{
            this.setState({
                userEvents: rez.data,
                eventsAttending: rez.eventsAttending
            })
        })
    }
    renderUserEvents(data){
        this.state.data.map(event =>{
            return(
                <div>
                    <h2>
                        {event.title}
                    </h2>
                    <p>{event.address}</p>
                    <p>{event.event_date}</p>
                    <p>{event.event_time}</p>
                    <p>{event.genre}</p>
                    <p>{event.description}</p>
                    <p>Created by: {this.state.user_name}</p>
                    <p>{event.zip_code}</p>
                </div>
            )
        })
    }
    renderUserAttendingEvents(data){
        this.state.eventsAttending.map( event =>{
            return(
                <div>
                    <h2>{event.title}</h2>
                    {/* <link>add link to this events page</link> */}
                </div>
            )
        })
    }
    render(){
        return(
            <div>
                <h1>
                    welcome {this.state.name}
                </h1>
                <div>
                    <h2>Your events</h2>
                    {this.renderUserEvents(this.state.userEvents)}
                </div>
            </div>
        )
    }
}
export default Profile;