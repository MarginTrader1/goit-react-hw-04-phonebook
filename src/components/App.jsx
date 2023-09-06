import { useState } from 'react';

import { ContactsList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

// начальное значение контактов
const defaltState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Rosie Eden', number: '555-00-26' },
  { id: 'id-6', name: 'Clement Young', number: '344-01-46' },
];

export const App = () => {
  const [contacts, setContacts] = useState(defaltState);
  const [filter, setFilter] = useState('');

  // добавляем новый контакт
  const addContact = newContact => {
    // через метод some() проверяем, есть ли в массиве объектов такое имя -> возвращает true/false
    let existWord = contacts.some(object => object.name === newContact.name);

    // если true -> используем паттерн "ранее возвращение" (return после алерта)
    if (existWord) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    // если false - добавляем новый объект в массив объектов, а именно распыляем старый массив объектов и добавляем новый объект в массив
    return setContacts(prevState => [...prevState, newContact]);
  };

  // метод добавления фильтра - из компонента Filter возвращается значение инпута в value
  const addFilter = value => setFilter(value);

  // метод удаления контакта - из компонента ContactList возвращается id елемента.
  const deleteContact = id => {
    // фильтруем массив объектов по id -> возвращаем массив без объекта с таким id
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  // метод сброса списка контактов до дифолтного значения
  const addDefaltState = () => setContacts(defaltState);

  // создаем новый массив, отфильтрованный по значению filter, который передаем пропсом в компонент ContactsList
  const filteredList = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
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
      <ContactForm addContact={addContact} defaltState={addDefaltState} />

      <h2>Contacts</h2>
      <Filter addFilter={addFilter} />
      <ContactsList list={filteredList} deleteContact={deleteContact} />
    </div>
  );
};
