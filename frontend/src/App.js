import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Search from './components/Search'
import Radiobuttons from './components/radiobuttons'



function App() {
  const [word, setWord] =useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }
    
  return (
    <div className="App">
      <Header title = "Just another Web App"></Header>
      <Search word={word} setWord={setWord} handleSubmit = {handleSearchSubmit}>
      </Search>

    </div>
  );
}

export default App;
