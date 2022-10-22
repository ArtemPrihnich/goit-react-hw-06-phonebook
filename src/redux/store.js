import { configureStore } from '@reduxjs/toolkit'
// import { contactsReducer } from './contacts/contacts-reducer';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import contactsReducer from './contactsReducer'

// const persistConfig = {
//   key: 'root',
//     storage,
// }

// const persistedContactsReducer = persistReducer(persistConfig, contactsSlice)
// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer) ////

const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: filterSlice
        // contactsReducer
        // filter: filterSlice
        // contacts: persistedContactsReducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});

// export const persistor = persistStore(store)

export default store