import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContact from './FilterContacts/FilterContacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(({ contacts }) => {
      return { contacts: [data, ...contacts] };
    });
  };

  handleCheckContact = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert(`${name} is already in contacts`);

    return !isExistContact;
  };

  handleFilterChange = filter => this.setState({ filter });

  removeContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

    findByName =() => {
      let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
    };
  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleNumberChange = event => {
  //   this.setState({ number: event.currentTarget.value });
  // };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm
          onCheckContact={this.handleCheckContact}
          onSubmit={this.formSubmitHandler}
        />
        <FilterContact
          filter={this.state.filter}
          onChange={this.handleFilterChange}
          
        />
        <ContactList 
        list={this.state.contacts}
        filter={this.state.filter} 
        onRemove={this.removeContact}
        findContact={this.findByName} />
      </div>
    );
  }
}

export default App;
