import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainTag = styled.main`
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    align-items: center;
    height: 100vh;
  `;

  const ATag = styled.a`
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    width: 60%;
    height: 50%;
    display: grid;
    grid-template-rows: 300px auto;
    justify-items: center;
    font-size: 30px;
    overflow: hidden;

    &:hover img {
      transform: scale(2.2);
    }

    & > img {
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
      transform: scale(2);
      transition: all ease 1s;
    }

    & > div {
      border-radius: 0 0 10px 10px;
      width: 100%;
      background: #fff;

      h5 {
        margin: 15px 15px 0;
        font-weight: 500;
      }
      
      p {
        margin: 10px 15px;
        font-size: 11px;
      }
    }
  `

  return (
    <MainTag>
      <ATag href="/users/">
        <img alt="todo" src="images/todo.jpg" />
        <div>
          <h5>To-Do</h5>
          <p>The easiest way to get stuff done, every day.</p>
        </div>
      </ATag>
      <ATag href="/posts/">
        <img alt="board" src="images/board.jpg" />
        <div>
          <h5>Board</h5>
          <p>Stories of yours.</p>
        </div>      
      </ATag>
    </MainTag>
  );
};


export default Main;
