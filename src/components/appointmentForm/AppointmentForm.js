import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleChange = (event) => {
    const {name, value} = event.target;

    switch(name) {
      case "title":
        setTitle(() => value);
        break;

      case "contact":
        setContact(() => value);
        break;

      case "date":
        setDate(() => value);
        break;

      case "time":
        setTime(() => value);
        break;
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Appointment:</label>
      <input id="title" type="text" required onChange={handleChange} value={title} name="title"/>
      <label for="contact">Contact:</label>
      <select id="contact" name="contact" onChange={handleChange} value={contact}>
        <option default></option>
        {contacts.map(contact => {
          return(
          <option value={contact.name}>{contact.name}</option>)})}
      </select>
      <label for="date">Date:</label>
      <input 
        id="date" 
        type="date" 
        required 
        onChange={handleChange} 
        value={date} 
        name="date"
        min={getTodayString()}
      />
      <label for="time">Time:</label>
      <input id="time" type="time" required onChange={handleChange} value={time} name="time"/>
      <input type="submit"/>
    </form>
  );
};
