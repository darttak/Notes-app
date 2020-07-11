const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
const { argv } = require('yargs');

yargs.command({
    command: 'add',
    describe: 'adds note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removes note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'lists note',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'reads note',
    builder: {
        title: {describe: 'Note title',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse();
