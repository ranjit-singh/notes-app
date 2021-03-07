import { noteConstants } from '../constants';

export const noteActions = {
    addNote,
    removeNote,
    archiveNote
};

function addNote(category, title, content, latitude, longitude, address) {
  return { type: noteConstants.ADD_NOTE, category, title, content, latitude, longitude, address, status: 'active' };
}

function removeNote(id) {
  return { type: noteConstants.REMOVE_NOTE, id: id };
}

function archiveNote(id) {
  return { type: noteConstants.ARCHIVE_NOTE, id: id };
}
