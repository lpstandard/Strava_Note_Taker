import React, { Component } from "react";
import NotesList from "./NotesList";

class Notes extends Component {
  propTypes: {
    athleteName: React.propTypes.string.isRequired, 
    notes: React.propTypes.array.isRequired
  }
  render(){
    console.log('notes', this.props.notes)
    return(
      <div>
        <h3> Note for {this.props.username} </h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
}

export default Notes;