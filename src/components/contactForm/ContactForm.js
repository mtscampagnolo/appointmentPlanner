import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChange = (event) => {
    const {name, value} = event.target;
    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="new-contact-name">Contact Name:</label>
      <input 
        id="new-contact-name" 
        type="text" value={name} 
        name="name" 
        onChange={handleChange}
        required
      />
      <label for="new-contact-phone">Contact Phone:</label>
      <input 
        id="new-contact-phone" 
        type="number" value={phone} 
        name="phone"
        onChange={handleChange}
        required  
      />
      <label for="new-contact-email">Contact Email:</label>
      <input 
        id="new-contact-email" 
        type="email" 
        value={email} 
        name="email"
        onChange={handleChange}
        required  
      />
      <input type="submit"/>
    </form>
  );
};

