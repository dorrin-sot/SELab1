let notes = []

function createNoteInterface(note) {
    // todo
}

function loadNotesInterface() {
    if (notes.length > 0) {        
        const container = document.getElementById('prev-notes-container')
        container.removeChild(container.lastElementChild)
        notes.forEach((note) => container.appendChild(createNoteInterface(note)))
    }
}

document.onreadystatechange = (_) => {
    notes = localStorage.getItem('notes') || []
    loadNotesInterface()
}