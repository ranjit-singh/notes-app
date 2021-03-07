import { noteConstants } from '../constants';

const initialState = {
  notes: [],
};

export function notes(state = initialState, action) {
  switch (action.type) {
    case noteConstants.ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            category: action.category,
            title: action.title,
            content: action.content,
            lat: parseFloat(action.latitude),
            lng: parseFloat(action.longitude),
            address: action.address,
            status: action.status
          },
        ],
      };
    case noteConstants.REMOVE_NOTE:
      return {
        notes: state.notes.filter((note, index) => index != action.id),
      };
    case noteConstants.ARCHIVE_NOTE:
      return {
        notes: state.notes.filter((note, index) => index != action.id),
      };
    default:
      return state;
  }
}
