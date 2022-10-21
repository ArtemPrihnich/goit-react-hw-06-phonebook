import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export const addContacts = createAction('contacts/add', (data) => {
    return {
        payload: {
            id: nanoid(),
            ...data
        }
    }
})

export const deleteContacts = createAction('contacts/remove')