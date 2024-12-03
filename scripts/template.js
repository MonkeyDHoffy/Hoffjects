function getNoteTemplate(indexNotes) {
    return `<li>
    ${notes[indexNotes]}&nbsp;
    <button style="border-color: #cfc5c5;
    border-radius: 15px;" onclick="deleteThisNote(${indexNotes})">X</button>
    </li>`;
}

function getTrashNoteTemplate(trashIndexNotes) {
    return `<li>
    ${trashNotes[trashIndexNotes]}&nbsp;
    <button style="border-color: #cfc5c5;
    border-radius: 15px;" onclick="deleteOneTrashElement(${trashIndexNotes})">X</button>
    <button style="border-radius: 5px;" onclick="restoreTrash()">restore</button>
    </li>`;
}

