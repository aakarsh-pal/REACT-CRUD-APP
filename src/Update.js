import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setId(parseInt(localStorage.getItem('id')));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`https://648ccc548620b8bae7ed636f.mockapi.io/CRUD/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate('/read');
      });
  };

  return (
    <div>
      <h2>UPDATE</h2>
      <br />
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            value={name} // Set value as the current name state
            onChange={(e) => setName(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email} // Set value as the current email state
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleUpdate} className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
