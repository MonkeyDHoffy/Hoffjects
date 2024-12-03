let notes = [];
let notesTitles = ["ö", "ä"];

let trashNotes = [];
let trashNotesTitles = [];


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
        const note = notes[indexNotes];
        contentRef.innerHTML += " " + getNoteTemplate(indexNotes);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    for (let trashIndexNotes = 0; trashIndexNotes < trashNotes.length; trashIndexNotes++) {
        trashContentRef.innerHTML += " " + getTrashNoteTemplate(trashIndexNotes);
    }
}

//theoretisch kann man hier noch die titles einfügen --> title: ${notesTitles[indexNotes]}..... / die functions etc könnnen dann noch darauf angepasst werden
//  <input class="text" value="${notes[indexNotes]}"> mann könnte auch ein inputfeld returnen um die notes später noch zu verändern?!

// !!!! ALLES VERSCHOBEN --> TEMPLATE.JS
// function getNoteTemplate(indexNotes) {
//     return `<li>${notes[indexNotes]}&nbsp;<button style="border-color: #cfc5c5;
//     border-radius: 15px;" onclick="deleteThisNote(${indexNotes})">X</button></li>`;
// }

// function getTrashNoteTemplate(trashIndexNotes) {
//     return `<li>${trashNotes[trashIndexNotes]}&nbsp;<button style="border-color: #cfc5c5;
//     border-radius: 15px;" onclick="deleteOneTrashElement(${trashIndexNotes})">X</button><button style="border-radius: 5px;" onclick="restoreTrash()">restore</button></li>`;
// }

function addNote() {
    let noteInputRef = document.getElementById('input-notes');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = "";
}

function deleteNotes() {
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
        let trashNote = notes[indexNotes];
        trashNotes.push(trashNote);
    }
    console.log(notes.splice(0)); // schickt mich drauf, dass log in diesem fall die untere zeile irrelevant macht
    let trashNote = notes.splice(0);
    renderNotes();
    renderTrashNotes();
}

function deleteLastNotes() {
    if (notes.length > 0) {
        let trashNote = notes.splice(notes.length - 1, 1);
        trashNotes.push(trashNote);
        renderNotes();
        renderTrashNotes();
    }
}

function deleteThisNote(indexNotes) {
    let trashNote = notes.splice(indexNotes, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

function restoreTrash(trashIndexNotes) {
    let noteInputRef = trashNotes.splice(trashIndexNotes, 1);
    let noteInput = noteInputRef[0];
    notes.push(noteInput);
    noteInputRef.innerHTML = "";
    renderNotes();
    renderTrashNotes();
}

function deleteTrash() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    trashNotes.splice(0);
}

function deleteOneTrashElement(trashIndexNotes) {
    trashNotes.splice(trashIndexNotes, 1);
    renderTrashNotes();
}



