export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    payload: contact,
  });
  
  export const deleteContact = (id) => ({
    type: 'DELETE_CONTACT',
    payload: id,
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
  });
  