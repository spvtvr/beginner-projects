import React, { useState, useEffect } from 'react';



export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch(err => {
        console.warn(err);
        alert('Data is not received')
      })
  }, []);

  return <div>UserList</div>;
}
