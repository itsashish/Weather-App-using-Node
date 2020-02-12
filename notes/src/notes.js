const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote) {
        const note = {
                title,
                body
            }
        notes.push(note)
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added!'))
    } else {
        console.log(chalk.red.inverse('Diplicate note found!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter(function(note) {
        return note.title !== title
    })

    if(notes.length > filteredNotes.length){
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No notes found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find(function(note) {
        return note.title == title
    })

    if(foundNote){
        console.log(chalk.green(`Note is ${foundNote.title}`));
    } else {
        console.log(chalk.red.inverse('No notes found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length>0) {
      notes.forEach(note => {
          console.log(chalk.green(`Note title: ${note.title}`))
          console.log(chalk.green(`Note body: ${note.body}`))
      });
    } else {
        console.log(chalk.red.inverse('No notes found!'))
    }
}


const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try{
        const jsonData = fs.readFileSync('notes.json');
        const notes = JSON.parse(jsonData.toString())
        return notes;
    } catch(e) {
        return []
    }
}

module.exports = {
    addnote: addNote,
    removeNote:removeNote,
    readNote:readNote,
    listNotes:listNotes
}