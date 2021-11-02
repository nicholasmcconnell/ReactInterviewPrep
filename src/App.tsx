import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import TodoInput from './components/TodoInput';
import Button from './components/button/button';
//https://randomuser.me/api?page=
function App() {

  // const [increment, setIncrement] = useState<number>(0)
  // const [randomUser, setRandomUser] = useState<any>([]);
  // const [nextPage, setNextPage] = useState<number>(1);
  // const [users, setUsers] = useState<any>([]);

  // const onClickIncrement = (): void => {
  //   setIncrement(increment + 1);
  // }

  // useEffect(() => {
  //   fetchUser(nextPage);
  // }, [])

  // const fetchUser = async (nextPage: number) => {
  //   try {
  //     const { data: { results } } = await axios.get(`https://randomuser.me/api/?page=${nextPage}`)
  //     console.log(nextPage)
  //     setNextPage(nextPage + 1);
  //     // const { results } = userData;
  //     // setRandomUser(results);
  //     setUsers([...users, ...results])
  //     console.log(results);

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // interface FullName {
  //   first: string,
  //   last: string
  // }

  // const getFullName = (user: any): string => {

  //   const { name: { first, last } } = user;

  //   return `${first} ${last}`;
  // }

  // const getUserImage = (user: any): string => {

  //   const { picture: { large } } = user;
  //   console.log(large)
  //   return large;
  // }

  // const addUser = async () => {
  //   try {
  //     await fetchUser(nextPage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const [todoArray, setTodoArray] = useState<string[]>([]);

  const addNewTodo = (newTodo: string) => {
    setTodoArray([...todoArray, newTodo])
  }

  const deleteTodo = () => {
    todoArray.pop();
    console.log(todoArray)
    setTodoArray([...todoArray]);
  }

  useEffect(() => {

  }, [todoArray])


  return (
    <div className="App">
      <header className="App-header">
        <p>
          INTERVIEW PREP
        </p>
      </header>

      {/* ------------ TODO LIST ------------ */}

      <TodoInput
        addNewTodo={addNewTodo}
        deleteTodo={deleteTodo}
      />

      {/*
      1.have an input that updates state array
      2. map over that array and show list
      
      */}

      <ul>
        {todoArray.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </ul>

      <Button label='TestDemo' />



      {/* ------------ COUNTER ------------ */}

      {/* <p>{increment}</p>
      <button onClick={onClickIncrement}>{'Increment'}</button> */}

      {/* ------------ AXIOS CALL -------------- */}


      {/* ------------ RENDER NAME AND PIC TO SCREEN -------------- */}

      {/* <button onClick={addUser}>Add User</button>
      {users.map((user: any) => {
        return (
          <div key={user.login.uuid} >
            <p>{getFullName(user)}</p>
            <img src={getUserImage(user)} alt="userPicture" />
          </div>
        )
      })} */}

      {/* ------------ APPEND USERS TO SCREEN -------------- */}



    </div>
  );
}

export default App;
