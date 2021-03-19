import React, {useState} from 'react';
// import BASE_URL from './components/constants';
import './App.css';
// import axios from 'axios';
import Header from './components/Header';
import Character from './components/Character';
import styled from 'styled-components';


const Container = styled.div`
width: 1000px;
margin: 0 auto;
border: 1px solid black;
padding: 15px 10px 15px 10px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.



  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container>
     <Header />
    <Character />
  </Container>
  );
}

export default App;
