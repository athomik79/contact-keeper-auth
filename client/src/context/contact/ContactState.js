import React, { useReducer } from 'react';
import * as uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';
import contactContext from './contactContext';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'Thor Gato',
        email: 'thor@email.com',
        phone: '555-555-5555',
        type: 'professional',
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
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
