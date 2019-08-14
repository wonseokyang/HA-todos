import React from 'react';
import styled from 'styled-components';

const UserList = (props) => {
  const { user } = props;
  
  const LiTag = styled.li`
    &:last-child {
      margin-bottom: 10px;
    }
  `;

  return (
    <LiTag>
        <a href={'/users/' + user.id}>
            {user.name}
        </a>
    </LiTag>
  );
};

export default UserList;
