import { createReducer } from '@reduxjs/toolkit'
import { addContacts, deleteContacts } from './contacts-actions'

export const contactsReducer = createReducer([], {
    [addContacts.type]: (store, { payload }) => {
        store.push(payload)
    },

    [deleteContacts.type]: (store, { payload }) => store.filter(({id}) => id !== payload)
})

