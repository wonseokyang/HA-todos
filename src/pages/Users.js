import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeBtn from '../components/HomeBtn';
import UserList from '../components/UserList';
import { Fetch } from '../components/Fetch';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Fetch('https://koreanjson.com/users', json => setUsers(json.map(person => person)));
  }, [])

  const MainTag = styled.main`
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-rows: 200px auto;
    grid-template-columns: 300px auto 300px;
    grid-template-areas: '.... .... home'
                         '.... list ....'
                         '.... button ....'
                         '.... .... ....';

    justify-items: center;
    align-items: center;
    height: 100vh;
  `;

  const UlTag = styled.ul`
    grid-area: list;
    width: 100%;
    border: 1px solid #d3d3d3;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 8px;
    border-radius: 10px;
    display: grid;
    text-align: center;

    h5 {
      font-size: 20px;  
      font-weight: 500;
      margin: 0 0 10px;
      padding: 20px;
      border-bottom: 1px solid #d3d3d3;
    }

    a {
      transition: all ease 1s;
      padding: 10px;
    }

    li:hover a {
      color: #fff;
      background-color: #777;
    }
  `;

  return (
    <MainTag>
      <HomeBtn />
      <UlTag>
        <h5>USER LIST</h5>
        {users.map(user => <UserList key={user.id} user={user} />)}
      </UlTag>
    </MainTag>
  );
};


export default Users;
