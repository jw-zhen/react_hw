import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button} from '@material-ui/core';
import  SaveIcon from '@material-ui/icons/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button startIcon={<SaveIcon />} size='large' onClick={() => { alert('clicked') }} variant="outlined" color="primary">
        Primary
        </Button>
      </header>
    </div>
  );
}

export default App;
