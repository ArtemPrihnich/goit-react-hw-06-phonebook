// import React, { useState, useEffect } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { Box } from './App.styled';
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { addContacts, deleteContacts } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-actions';

export default function App() {
  const contacts = useSelector(getFilteredContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()
  // const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? [])
  // const [filter, setFilter] = useState('')

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  const addContact = (contact) => {
    if (onDuplicatingName(contact)) {
      return Notify.failure(`This contact: (${contact.name}) is already in your contact book`);
    }

    dispatch(addContacts(contact))
    // setContacts((prev) => {
    //   const newContact = {
    //     id: nanoid(),
    //     ...contact
    //   };
    //   return [...prev, newContact]
    // })
  }

  const onDuplicatingName = ({ name }) => {
    const result = contacts.find(contact => {
      return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    })
    return result
  }

  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    if (name === 'filter') {
      dispatch(setFilter(value))
      // return setFilter(value)
    }
  };

  const onGetFilteredContacts = () => {
    if (!filter) {
      return contacts
    }

    const filteredContacts = contacts.filter(({ name, number }) => {
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })
    return filteredContacts
  }

  const deleteContact = (id) => {
    dispatch(deleteContacts(id))
    // setContacts((prevState) => {
    //   const newContacts = prevState.filter(contact => {
    //     return contact.id !== id
    //   })
    //   return [...newContacts]
    // })
  }

  const filteredContacts = onGetFilteredContacts()

  return (
    <Box>
      <ContactsForm onSubmit={addContact} />
      <ContactsFilter inputChange={handleChange} filterValue={filter} />
      <ContactsList contacts={filteredContacts} onDelete={deleteContact} />
    </Box >
  )
}
