let notes = []

function removeElementByIndex(array, i) {
    return array.slice(0, i).concat(array.slice(i + 1, array.length))
}

function submitNote() {
    const text = document.getElementById('new-note').value
    if (text == "") return
    notes.push({contents: text, date: (new Date()).getTime()})
    localStorage.setItem('notes', JSON.stringify(notes))
    document.getElementById('new-note').value = ''
    reloadNotesInterface()
}

function deleteNote(idx) {
    notes = removeElementByIndex(notes, idx)
    localStorage.setItem('notes', JSON.stringify(notes))
    reloadNotesInterface()
}

function createNoteInterface(note, idx) {
    const elem = document.createElement('div')
    elem.className = 'note'
    elem.style.justifyContent = 'space-between'
    elem.innerHTML = '<p class="date">' + new Date(note['date']).toLocaleString() + '</p>\n' + 
                     '<button class="delete-btn" onclick="deleteNote(' + idx + ')">🗑</button>\n' +
                     '<p class="contents">' + note['contents'] + '</p>\n'
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
        notes.forEach((note, idx, __) => 
            container.appendChild(createNoteInterface(note, idx)))
    } else {
        // show #no-notes
        document.getElementById('no-notes').style.display = ''
    }
}

function updateName() {
    const name = prompt('What is your name?')
    if (name) localStorage.setItem('username', name)
    else localStorage.removeItem('username')
    reloadAuth()
}

function reloadAuth() {
    const name = localStorage.getItem('username');
    const authBtn = document.getElementById('auth-button')
    const greeting = document.getElementById('greeting')
    if (name) {
        authBtn.innerText = 'Change Name'
        greeting.innerText = 'Hello, ' + name + '!'
    } else {
        authBtn.innerText = 'Enter Name'
        greeting.innerText = 'Hello, Stranger!'
    }
}

document.addEventListener("DOMContentLoaded", () => {
    notes = JSON.parse(localStorage.getItem('notes')) || []    
    reloadNotesInterface()
    reloadAuth()
})