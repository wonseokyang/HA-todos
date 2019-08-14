import React from 'react';
import styled from 'styled-components';

const MenuBtn = (props) => {
  const UlTag = styled.ul`
  grid-area: list;
  display: grid;
  grid-gap: 10px;
  width: 100%;

  & > li {
    border: 1px solid #d3d3d3;
    padding: 10px 30px;
    border-radius: 10px;
    transition: all ease 1s;
    
    &:hover {
      background-color: #ededed;
    }

    &:last-child > a {
      display: grid;
      grid-template-columns: auto 20px;
    }
  }
`;

  const { user, todos } = props;
  return (
    <UlTag>
      <li>
        <a href={'/users/' + user.id }>
          Profile
        </a>
      </li>
      <li>
        <a href={'/users/' + user.id + '/todos/' }>
          <span>To-Do</span><span>{todos.length}</span>
        </a>
      </li>
    </UlTag> 
  )
}

export default MenuBtn;
