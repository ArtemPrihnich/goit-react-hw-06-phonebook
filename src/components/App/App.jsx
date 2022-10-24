import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { Box } from './App.styled';

export default function App() {
  return (
    <Box>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />
    </Box >
  )
}
