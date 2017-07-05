import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const note = {
        'note-4': {
            id: 'note-4',
            title: 'Note from obj',
            body: 'Oh so fancy, I do declare!',
        },
        'note-5': {
            id: 'note-5',
            title: 'Note from another obj',
            body: 'Also very fancy',
        },
    }

    const noteIds = Object.keys(notes) // ['note-4, 'note-5']

    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {noteIds.map(noteId => <Note note = {notes[noteId]} />)}
            </ul>
        </div>
    )
}

export default NoteList