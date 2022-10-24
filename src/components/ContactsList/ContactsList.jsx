import React from 'react'
import { Button, Item, List } from './ContactsList.styled'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { removeContact } from 'redux/contacts/contacts-slice';

export default function ContactsList() {
    const contacts = useSelector(getFilteredContacts)
    const dispatch = useDispatch()

    const deleteContact = (id) => {
        dispatch(removeContact(id))
    }
    return (
        <List>
            {contacts?.map(({ name, number, id }) => {
                return (
                    <Item key={id}>{name}: {number} <Button onClick={() => deleteContact(id)}>delete</Button></Item>
                )
            })}
        </List>
    )
}
