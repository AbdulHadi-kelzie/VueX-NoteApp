import { createStore } from 'vuex';

const store = createStore({
  state: {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    modal: false,
    editNoteModal: false,
    selectedNote: null,
    originalText: ''
  },
  mutations: {
    AddNote(state, note){
      state.notes.push(note)
      updateLocalStorage(state.notes)
    },
    EditNote(state, {id, newText}){
      const noteIndex = state.notes.findIndex((note) => note.id === id)
      if(noteIndex !== -1){
       state.notes[noteIndex].text = newText
      }
      state.editNoteModal = false
      updateLocalStorage(state.notes)
    },
    DeleteNote(state, ID){
      const noteID = state.notes.findIndex((note) => note.id === ID);
      state.notes.splice(noteID, 1);
      updateLocalStorage(state.notes)
    },
    // GetRandomColor(){
    //   return 'hsl(' + Math.random() * 360 + ', 100%, 90%)';
    // },
  },
});

function updateLocalStorage(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export default store;
