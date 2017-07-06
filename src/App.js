import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes = {},
      currentNote: this.blankNote(),
    }
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

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
    }

    return (
      <div className="App">
        <Main
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          {...actions}
        />
      </div>
    )
  }
}

export default App