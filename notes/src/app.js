const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes')

yargs.version('1.0.0')

yargs.command({
    command:'add',
    describe:'Add a note',
    builder: {
        title:{
            describe:'Title for the note',
            demandOption: true,
            type: String
        },
        body: {
            describe:'body for the note',
            demandOption: true,
            type: String
        }
    },
    handler: function(argv) {
       notes.addnote(argv.title,argv.body) 
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title:{
            describe:'Title for the note',
            demandOption: true,
            type: String
        }
    },
    handler: function(argv) {
       notes.removeNote(argv.title)       
    }
})

yargs.command({
    command:'list',
    describe:'List notes',
    handler: function() {
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder: {
        title:{
            describe:'Title for the note',
            demandOption: true,
            type: String
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)