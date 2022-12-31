import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Search from './components/Search'
import React from 'react'


const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
// const UNSPLASH_KEY = '123';

const App = () => {
  const [word, setWord] =useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data)=> {
        console.log("Returned from API : ");
        console.log(data);
      })
      .catch((err) => {
        console.log("Returned an error : ");
        console.log(err);
      })
  }
    
  return (
  <div> 

    

      <Header title = "Just another Web App"></Header>
      <Search word={word} setWord={setWord} handleSubmit = {handleSearchSubmit}>
      </Search>

    </div>

  );
}

export default App;
