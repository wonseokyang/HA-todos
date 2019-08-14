import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeBtn from '../components/HomeBtn';
import MenuBtn from '../components/MenuBtn';


const User = (props) => {
  const [user, setUser] = useState({});
  const [todos, setTodos] = useState({});
  useEffect(() => {
    fetch(`https://koreanjson.com/users/${props.match.params.id}`)
    .then(response => response.json())
    .then(json => {
      setUser(json);
    })
    .catch(error => console.log(error));
    fetch(`https://koreanjson.com/todos?userId=${props.match.params.id}`)
    .then(response => response.json())
    .then(json => {
      setTodos(json);
    })
    .catch(error => console.log(error));  
  }, [props.match.params.id])

  const MainTag = styled.main`
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-rows: 200px auto;
    grid-template-columns: 300px auto 300px;
    grid-template-areas: 'list ....... home'
                         '.... content ....'
                         '.... content ....'
                         '.... ....... ....';

    justify-items: center;
    align-items: center;
    height: 100vh;
  `;

  const ProfileDiv = styled.div`
    grid-area: content;
    min-width: 300px;
    display: grid;
    grid-gap: 20px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 8px;

    ul {
      margin: 0;
      display: grid;
    
      li {
        align-items: center;
        display: grid;
        grid-template-columns: 70px auto;
        padding: 5px 30px;
      }

      h5 {
        font-size: 20px;  
        font-weight: 500;
        margin: 0 0 10px;
        padding: 30px;
        border-bottom: 1px solid #d3d3d3;
        text-align: center;
      } 
    }

    img {
      width: 200px;
      margin: 10px auto 30px;
      border-radius: 10px;
    }  
  `;

  return (
    <MainTag>
      <MenuBtn user={user} todos={todos} />
      <HomeBtn href="/">Home</HomeBtn>

      {user.id !== undefined ? (
        <ProfileDiv>
          <ul>
            <h5>USER CARD</h5>
            <li>
              <span><strong>name</strong></span>
              <span>{user.name}</span>
            </li>
            <li>
              <span><strong>email</strong></span>
              <span>{user.email}</span>
            </li>
            <li>
              <span><strong>mobile</strong></span>
              <span>{user.phone}</span>
            </li>
          </ul>
          <img alt={user.name} src={'https://randomuser.me/api/portraits/men/' + user.id + '.jpg'}/>
        </ProfileDiv>
      ) : <></>}
    </MainTag>
  );
};

export default User;
