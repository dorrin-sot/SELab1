let notes = []

function removeElementByIndex(array, i) {
    return array.slice(0, i).concat(array.slice(i + 1, array.length))
}

function submitNote() {
    const text = document.getElementById('new-note').value
    notes.push(text)
    localStorage.setItem('notes', JSON.stringify(notes))
    reloadNotesInterface()
}

function createNoteInterface(note) {
    const elem = document.createElement('p')
    elem.innerText = note
    return elem
}

function reloadNotesInterface() {
    const container = document.getElementById('prev-notes-container')

    // Remove all container elements except #no-notes
    while (container.lastElementChild.innerText != 'No notes added yet') {
        container.removeChild(container.lastElementChild)
    }

    if (notes.length > 0) {
        // hide #no-notes
        document.getElementById('no-notes').style.display = 'none'
        notes.forEach((note, _, __) => container.appendChild(createNoteInterface(note)))
    } else {
        // show #no-notes
        document.getElementById('no-notes').style.display = ''
    }
}

document.addEventListener("DOMContentLoaded", () => {
    notes = JSON.parse(localStorage.getItem('notes')) || []    
    reloadNotesInterface()
})