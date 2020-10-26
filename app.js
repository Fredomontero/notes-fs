const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log(" Adding a new note");
  }
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: () => {
    console.log(" removing a note");
  }
});

//Create list command
yargs.command({
  command: 'list',
  describe: 'Listing existing notes',
  handler: () => {
    console.log("Listing all the notes");
  }
});

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log("Reading a note");
  }
});

console.log(yargs.argv); 