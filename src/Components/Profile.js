import React, { Component } from "react";
import Activity from "./Strava/Activity";
import Athlete from "./Strava/Athlete";
import Notes from "./Note/Notes";
import getStravaInfo from "../utils/helpers";
import firebase from 'firebase';
import Rebase from "re-base";

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoV54OHeSpsppsC5LFxOryemvsdolDQSc",
    authDomain: "strava-note-taker.firebaseapp.com",
    databaseURL: "https://strava-note-taker.firebaseio.com",
    storageBucket: "strava-note-taker.appspot.com",
    messagingSenderId: "1088177446628"
  };
  firebase.initializeApp(config);

const base = Rebase.createClass('http://strava-note-taker.firebaseio.com')

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [], 
      bio: {}, 
      activity: []
    }
  }

  componentDidMount(){
    this.init(this.props.params.username);
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  }
  
  componentWillReceiveProps(nextProps){
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  init(username){
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getStravaInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  }
  
  handleAddNote(newNote){
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })

  }

  render(){
    return (
      <div className='row'>
        <div className='col-md-4>'>
          <Athlete username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className='col-md-4'>
          <Activity username={this.props.params.username} activity={this.state.activity}/>
        </div> 
        <div className='col-md-4'>
          <Notes 
            username={this.props.params.username} 
            notes={this.state.notes}
            addNote={(newNote) => this.handleAddNote(newNote)} 
          />
        </div>
      </div>
    )
  }
}

export default Profile;