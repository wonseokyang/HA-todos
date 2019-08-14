import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeBtn from '../components/HomeBtn';
import MenuBtn from '../components/MenuBtn';
import ToDoList from '../components/ToDoList';
import { Fetch } from '../components/Fetch';

const ToDos = (props) => {
  const [user, setUser] = useState({});
  const [todos, setTodos] = useState({});
  const [option, setOption] = useState('all');
  useEffect(() => {
    Fetch(`https://koreanjson.com/users/${props.match.params.id}`, json => setUser(json));
    Fetch(`https://koreanjson.com/todos?userId=${props.match.params.id}`, json => setTodos(json));
  }, [props.match.params.id])

  const onChangeOption = (event) => {
    setOption(event.target.value);
    if (event.target.value === 'all') {
      Fetch(`https://koreanjson.com/todos?userId=${props.match.params.id}`, json => setTodos(json));
    } else if (event.target.value === 'todo') {
      Fetch(`https://koreanjson.com/todos?userId=${props.match.params.id}`, json => setTodos(json.filter(todo => todo.completed === false)));
    } else {
      Fetch(`https://koreanjson.com/todos?userId=${props.match.params.id}`, json => setTodos(json.filter(todo => todo.completed === true)));
    }
  }

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

  const ToDosDiv = styled.div`
    grid-area: content;
    display: grid;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 8px;
    
    select {
      font-size: 20px;
      margin: 20px 20px 0;
    }

    ul {
      display: grid;
    
      li {
        padding: 5px 30px;
      }
    }
  `;

  return (
    <MainTag>
      <MenuBtn user={user} todos={todos} />
      <HomeBtn />

      {user.id !== undefined ? (
        <ToDosDiv>
          <select value={option} onChange={onChangeOption}>
            <option value="all">All</option>
            <option value="todo">To-Do</option>
            <option value="done">Done</option>
          </select>
          <ul>
            {todos.map(todo => <ToDoList key={todo.id} todo={todo} />)}
          </ul>
        </ToDosDiv>
      ) : <></>}
    </MainTag>
  );
};

export default ToDos;
