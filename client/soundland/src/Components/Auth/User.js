import React, {Component} from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            user: {},
            ready: false,
            userEvents: null,
            eventsAttending: null,
            propsLoaded: false
        }
        this.userEventData = this.userEventData.bind(this);
        this.renderUserEvents = this.renderUserEvents.bind(this)
        this.renderUserAttendingEvents = this.renderUserAttendingEvents.bind(this)
    }

    componentDidMount(){
        this.setState({
            user: this.props.user,
            propsLoaded: true
        })   
    }   
    
    userEventData(){
        let id = this.props.user.id;
        axios({
            method: 'POST',
            url: `http://localhost:3001/profile/${this.props.user.id}`,
            data: { id }
        })
        .then(rez =>{
            this.setState({
                userEvents: rez.data.data,
                eventsAttending: rez.data.eventsAttending,
                ready: true,
                propsLoaded: false
            })
        }).catch(err =>{
            console.log(err)
        })
    }

    renderUserEvents(data){
        return data.map((event, index) =>{
            return(
                <div className="event">
                    <h3 key={`${index}`}>
                        {event.title}
                    </h3>
                    <p>{event.address}, {event.zip_code}</p>
                    <p>{event.event_date} at {event.event_time}</p>
                    <p>{event.genre}</p>
                    <p>{event.description}</p>
                    <p>Hosted by: {event.createdby}</p>
                </div>
            )
        })
    }

    renderUserAttendingEvents(data){
        return data.map((event, index) =>{
            return(
                <div className="event">
                    <h3 key={`${index}`}>
                        {event.title}
                    </h3>
                    <p>{event.address}, {event.zip_code}</p>
                    <p>{event.event_date} at {event.event_time}</p>
                    <p>{event.genre}</p>
                    <p>{event.description}</p>
                    <p>Created by: {event.createdby}</p>
                </div>
            )
        })
    }
    render(){
        return(
            <div>
                <h1 className="welcome">
                    Welcome {this.state.propsLoaded ? this.state.user.name : ''}
                </h1>
                <div className='events-profile'>

                  <div className='planned'>
                    <h2>Parties you planned!</h2>
                    {this.state.propsLoaded ? this.userEventData() : " "}
                    {this.state.ready?this.renderUserEvents(this.state.userEvents):''}
                  </div>

                  <div className='attending'>
                    <h2>Parties you're attending!</h2>
                    {this.state.ready?this.renderUserAttendingEvents(this.state.eventsAttending):''}
                  </div>
                </div>
            </div>
        )
    }
}
export default Profile;