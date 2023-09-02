import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import s from '../App/App.module/App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter] = useState('');
 

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    
  };
  
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm/>
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} />
      <ContactList
        contacts={getVisibleContacts()}
      />
    </div>
  );
};

export default App;
