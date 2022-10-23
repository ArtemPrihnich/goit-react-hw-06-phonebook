import { combineReducers } from "@reduxjs/toolkit";
import contacts from './contacts/contacts-slice';
import filter from './filter/filter-slice';

const contactsReducer = combineReducers({
    contacts,
    filter
})

export default contactsReducer;