import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import SearchBox from './searchBox/SearchBox';
import './App.css';


function App() {
  return (
    <>
      <h1 >Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
