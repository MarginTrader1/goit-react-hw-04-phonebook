import { Component } from 'react';

import { ContactsList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const defaltState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Rosie Eden', number: '555-00-26' },
  { id: 'id-6', name: 'Clement Young', number: '344-01-46' },
];

export class App extends Component {
  state = {
    contacts: defaltState,
    filter: '',
  };

  // данные из localStorage записываем в State 
  componentDidMount() {
    this.setState(prevState => {
      const localData = localStorage.getItem('contacts');

      if (localData !== null) {
        return {
          contacts: JSON.parse(localData),
        };
      }
    });
  }

  // добавляем данные в localStorage
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // метод добавления контакта - из компонента ContactForm возвращается submit формы ввиде объекта newContact
  addContact = newContact => {
    this.setState(prevState => {
      // через метод some() проверяем, есть ли в массиве объектов такое имя -> возвращает true/false
      let existWord = prevState.contacts.some(
        object => object.name === newContact.name
      );
      // если true -> используем паттерн "ранее возвращение" (return после алерта)
      if (existWord) {
        alert(`${newContact.name} is already in contacts.`);
        return;
      }

      // если false - добавляем новый объект в массив объектов, а именно распыляем старый массив объектов и добавляем новый объект в массив
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  // метод удаления контакта - из компонента ContactList возвращается id елемента.
  deleteContact = id => {
    this.setState(prevState => {
      return {
        // фильтруем массив объектов по id -> возвращаем массив без объекта с таким id
        contacts: prevState.contacts.filter(item => item.id !== id),
      };
    });
  };

  // метод добавления фильтра - из компонента Filter возвращается значение инпута в value
  addFilter = value => {
    this.setState(prevState => {
      return {
        filter: value,
      };
    });
  };

  // метод сброса списка контактов до дифолтного значения 
  addDefaltState = () => {
    this.setState(prevState => {
      return {
        contacts: defaltState,
      };
    });
  };

  render() {
    // создаем новый массив, отфильтрованный по значению filter, который передаем пропсом в компонент ContactsList
    const filteredList = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '500px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          defaltState={this.addDefaltState}
        />

        <h2>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactsList list={filteredList} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
