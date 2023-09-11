// components/NameForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../../actions/formAction';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const NameForm = () => {

  // test useParams >> untuk get params /:id atau /1
  // notes: nama ids harus sama dengan di route :ids jika tidak maka undefined
  const { ids } = useParams()
  console.log("id ke: ", ids);
  // --

  // test useLocation >> untuk check lokasi current path
  const location = useLocation()
  console.log(location);
  const [currentPath, setCurrentPath] = useState('')
  console.log('pathname:', location.pathname)

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  console.log('currentPath:', currentPath)
  // ---

  // test URLSearchParams > untuk get atau set query params
  const queryParams = new URLSearchParams()
  console.log(queryParams);
  useEffect(() => {
    queryParams.set("name", "Ronald")
    queryParams.set("umur", "doni")
    // const queryString = queryParams.toString();
    window.history.replaceState({}, 'ronald', `?${queryParams}`);

  })
  // --

  const getNameParams = window.location.search
  const nameParams = new URLSearchParams(getNameParams)
  const nameDataParams = nameParams.get("name")
  const umurDataParams = nameParams.get("umur")
  console.log("nama params", nameDataParams);
  console.log("umur params", umurDataParams);



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
    dispatch(setName(nameInput, emailInput));
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
