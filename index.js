let notes = []

function createNoteInterface(note) {
    const elem = document.createElement('p')
    elem.innerText = note
    return elem
}

function loadNotesInterface() {
    if (notes.length > 0 || true) {        
        const container = document.getElementById('prev-notes-container')
        container.removeChild(container.lastElementChild)
        notes.forEach((note, _, __) => container.appendChild(createNoteInterface(note)))
    }
}

document.onreadystatechange = (_) => {
    notes = localStorage.getItem('notes') || []
    loadNotesInterface()
}