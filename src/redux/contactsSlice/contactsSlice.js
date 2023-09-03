import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    deleteContact: (state, { payload }) => ({
      ...state,
      items: state.items.filter(contact => contact.id !== payload),
    }),
    changeFilter: (state, { payload }) => ({
      ...state,
      filter: payload,
    }),
  },
});

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;