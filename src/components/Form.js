import React, { useState } from "react";

function Form() {

  const [name, setName] = useState({firstName: '', lastName: ''})

  function handleChange(event) {
    const elementName = event.target.name
    const value = event.target.value

    setName({...name, [elementName]: value})
  }

  return (
    <form>
      <input type="text" name='firstName' onChange={handleChange} value={name.firstName} />
      <input type="text" name='lastName' onChange={handleChange} value={name.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
