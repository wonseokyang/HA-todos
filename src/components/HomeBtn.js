import React from 'react';
import styled from 'styled-components';

const HomeBtn = (props) => {
  const ATag = styled.a`
    grid-area: home;
    color: #fff;
    background-color: #000;
    padding: 20px;
    border-radius: 10px;
    transition: all ease 1s;

    &:hover {
      background-color: #777;
    }
  `;

  return (
    <ATag href="/">
      Home
    </ATag>
  )
}

export default HomeBtn;
