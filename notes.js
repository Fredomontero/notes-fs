const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  if(duplicateNotes.length === 0){
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.bold("New note Added"));
  }else{
    console.log(chalk.red.bold("Duplicated note"));
  }
};

const removeNote = (title) => {
  let notes = loadNotes();
  const index = notes.findIndex(note => note.title === title);
  if(index >= 0){
    console.log("Index: ", index);
    console.log("notes: ", notes);
    notes.splice(index, 1);
    saveNotes(notes);
    console.log(chalk.red.bold(`Note deleted: ` + title));
  }else{
    console.log(chalk.red.bold("Note not found"));
  }
  

}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }catch(error){
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};