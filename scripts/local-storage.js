function init() {
    loadLocal();
    clickCounter();
}

//Clickcounter ----------------



function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1; // Initialisiere clickcount, wenn es noch nicht existiert }
    }
    document.getElementById("demo").innerHTML = localStorage.clickcount;

}

//Save Notes local :
function saveLocal() {
    let notesJSON = JSON.stringify(notes);
    localStorage.setItem('notes', notesJSON);
    console.log("Notes saved", notes);

}


//hab ich noch nicht zu 100% verstanden
function loadLocal() {
    let storedNotesJSON = localStorage.getItem('notes');
    let storedNotes = JSON.parse(storedNotesJSON);
    if (storedNotes != null) {
        notes = storedNotes;
        console.log(storedNotes);
        renderNotes();
    }

}