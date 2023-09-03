import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, changeFilter } from '../contactsSlice/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import s from '../App/App.module/App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleChangeFilter = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChangeFilter={handleChangeFilter} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
