import React from 'react';
import axios from 'axios';

import './App.css';

const { useState, useEffect } = React;

function App() {

  const [randomUserDataJSON, setRandomUserData] = useState<any>([]);
  const [nextPageNumber, setNextPageNumber] = useState<any>(1);
  const [jsonRes, setJsonRes] = useState();
  const [users, setUsers] = useState([]);

  const fetchRandomData = async (pageNumber: number) => {
    try {
      let { data } = await axios.get(`https://randomuser.me/api?page=${pageNumber}`);
      let { results } = data;

      setRandomUserData(results);
      setUsers([...users, ...results]);

    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    fetchRandomData(nextPageNumber);
  }, [])

  interface UserName {
    first: string,
    last: string,
    title: string
  }

  interface UserPicture {
    large: string,
  }

  interface UserInfo {
    userInfo: UserName,
    picture: UserPicture,
  }

  const getFullUserName = (randomUser: any) => {
    const { name: { first, last } } = randomUser;
    return `${first} ${last}`;
  }

  const getUserImage = (randomUser: any): string => {
    const { picture: { large } } = randomUser;
    return large;
  }

  const addUsers = async () => {
    try {
      fetchRandomData(nextPageNumber);
    } catch (error) {
      console.error(error);
    }
  }

  // const getUserImage = ()
  return (
    <div className="App">
      <header className="App-header">
        <p>
          INTERVIEW PREP
        </p>
      </header>

      {/* ------------ COUNTER ------------ */}

      {/* <p>{counter}</p>
      <button onClick={() => [decrement()]}>Decrement</button>
      <button onClick={() => increment()}>Increment</button> */}

      {/* ------------ AXIOS CALL -------------- */}

      {/* ------------ RENDER NAME AND PIC TO SCREEN -------------- */}

      <button
        onClick={() => addUsers()}
      >
        Fetch Next User
      </button>
      <div>
        {users.map((randomUser: any, idx: number) => {
          // let { name: { first, last } } = randomUser;
          let { picture: { large } } = randomUser;
          return (
            <div>
              <h2
                key={idx}
              >
                {getFullUserName(randomUser)}</h2>
              <img src={large} alt='User'></img>
            </div>
          )
        })}
      </div>
      {/* ------------ APPEND USERS TO SCREEN -------------- */}



    </div>
  );
}

export default App;
