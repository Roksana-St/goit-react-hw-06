import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
