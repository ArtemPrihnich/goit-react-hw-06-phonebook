import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer: (store, { payload }) => {
                console.log(store)
                        store.push(payload)
                    },
                    prepare: (data) => {
                        return {
                            payload: {
                            id: nanoid(),
                            ...data
                    }
                }
            }
        },
        removeContact(store, {payload}) {
            return store.filter(({id}) => id !== payload)
        }
    }
})

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;