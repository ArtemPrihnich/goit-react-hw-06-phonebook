import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { Box } from './App.styled';
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

export default function App() {
  const contacts = useSelector(getFilteredContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()

  const onAddContact = (contact) => {
    if (onDuplicatingName(contact)) {
      return Notify.failure(`This contact: (${contact.name}) is already in your contact book`);
    }

    dispatch(addContact(contact))
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
    }
  };

  const deleteContact = (id) => {
    dispatch(removeContact(id))
  }

  return (
    <Box>
      <ContactsForm onSubmit={onAddContact} />
      <ContactsFilter inputChange={handleChange} filterValue={filter} />
      <ContactsList contacts={contacts} onDelete={deleteContact} />
    </Box >
  )
}
