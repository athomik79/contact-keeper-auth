import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'Thor Gato',
        email: 'thor@email.com',
        phone: '555-555-5555',
        type: 'personal',
      },
      {
        id: '2',
        name: 'Mellow Guy',
        email: 'mellow@email.com',
        phone: '555-555-5557',
        type: 'personal',
      },
      {
        id: '3',
        name: 'Cali Bear',
        email: 'cali@email.com',
        phone: '555-555-5556',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
