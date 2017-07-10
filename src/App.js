import React, { Component } from 'react'

import './App.css'
import base, { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes:  {},
      currentNote: this.blankNote(),
      uid: null,
    }
  }

  componentWillMount = () => {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          // Signed in
          this.handleAuth(user)
        } else {
          // Signed out
          this.setState({ uid: null })
        }
      }
    )
  }

  componentDidMount = () => {
    base.syncState(
      'notes',
      {
        context: this, // What object the state is on
        state: 'notes', // Which property to sync
      }
    )
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if(!note.id) {
      note.id = Date.now() // Timestamp
    }
    notes[note.id] = note

    this.setSate({ notes }) // same as ({notes: notes})
    this.setCurrentNote(note)
  }

  removeCurrentNote = () => {
    const notes = {...this.state.notes}
    notes[this.state.currentNote.id] = null
    this.setState({ notes })
    this.resetCurrentNote()
  }

  signedIn = () => {
    return this.state.uid
  }

  handleAuth = (result) => {
    this.setState({ uid: result.user.uid })
  }

  signOut = () => {
    auth.signOut()
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
      signOut: this.signOut,
    }

    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }

    return (
      <div className="App">
        {
          this.signedIn() 
          ? <Main {...noteData} {...actions} /> 
          : <SignIn />
        }
      </div>
    )
  }
}

export default App