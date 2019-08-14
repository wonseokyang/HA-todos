import React from 'react';
import styled from 'styled-components';

const ToDoList = (props) => {
  const { todo } = props;
  
  const LiTag = styled.li`
    width: 500px;
  `;
    
  return (
    <LiTag value={todo.title}>
        {todo.title}
    </LiTag>
  );
};

export default ToDoList;
