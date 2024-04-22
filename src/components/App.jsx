import './App.css'
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import contactsData from '../data/contacts.json';
import SearchBox from './SearchBox/SearchBox';

export default function App() {

  const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContacts] = useState(initContactsState);
  const [searchingText, setSearchingText] = useState('');

  const addContact = (newContact) => {
    setContacts((existingContacts) => {
      return [
        ...existingContacts,
        newContact
        ]
    });
  };

  const deleteContact = (contactId) => {
    setContacts((existingContacts) => {
      return existingContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(searchingText.toLocaleLowerCase()));

  function initContactsState() {
      const savedContacts = window.localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY);

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return contactsData;
  }

  // save contacts to the local storage every time it has been updated
  useEffect(() => {
    window.localStorage.setItem(CONTACTS_LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchingText} onChangeSearchInput={setSearchingText} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
