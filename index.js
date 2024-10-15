let notes = {}

function loadNotesInterface() {
    // todo elahe
}

document.onload = (_) => {
    notes = localStorage.getItem('notes') || {}
    loadNotesInterface()
}