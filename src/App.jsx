import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Container = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin infinite 5s linear;
  height: 80px;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>React App Starter</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </Intro>
      </Container>
    );
  }
}

export default App;
