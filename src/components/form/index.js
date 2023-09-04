// components/NameForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../../actions/formAction';
import { useNavigate } from 'react-router-dom';

const NameForm = () => {

const navigate = useNavigate()

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setName(nameInput,emailInput));
    setName("")
navigate("/")
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nameInput}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <input
        type="text"
        value={emailInput}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
