export const getFilteredContacts = ({filter, contacts}) => {   
    if (!filter) {
      return contacts
    }

    const filteredContacts = contacts.filter(({ name, number }) => {
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })

    return filteredContacts
}