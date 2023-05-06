import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const url = 'https://randomuser.me/api/?results=4';
  const loadUsersData = async () => {
    try {
      const res = await axios.get(url);
      setUsers(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log('tienes un grave error');
    }
  };

  useEffect(() => {
    loadUsersData();
  }, []);

  return (
    <div className="bg-neutral-800 min-h-sreem h-screen flex text-white justify-center flex-row gap-3 items-center">
      <h1 className="text-5xl">Users</h1>
      {users.map((user) => (
        <article key={user.login.uuid}>
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <div>
            <img src={user.picture.large} alt="Foto del usuario" />
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
