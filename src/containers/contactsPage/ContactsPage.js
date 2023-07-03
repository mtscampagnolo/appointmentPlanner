import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isDuplicated, setIsDuplicated] = useState(false)

  const checkDuplicates = () => {
     setIsDuplicated(props.contacts.some(contact => contact.name === newName))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(newName && newPhone && newEmail && !isDuplicated) {
      props.addContact(newName, newPhone, newEmail);
      
      setNewName(() => '');
      setNewPhone(() => '');
      setNewEmail(() => '');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(checkDuplicates,[newName, props.contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {isDuplicated && <p>Contact Already Exists</p>}
        <ContactForm 
          name={newName}
          setName={setNewName}
          phone={newPhone}
          setPhone={setNewPhone}
          email={newEmail}
          setEmail={setNewEmail}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          arr={props.contacts}
        />
      </section>
    </div>
  );
};
