import { combineReducers } from "@reduxjs/toolkit";

// import items from "./items/items-slice";
// import filter from "./filter/filter-slice";
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';

const contactsReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice,
    // contactsSlice,
    // filterSlice
})

export default contactsReducer;