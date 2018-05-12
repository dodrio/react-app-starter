import React from 'react';
import styled from 'styled-components';
import circle from './circle.svg';

const Circle = styled.img.attrs({
  src: circle,
  alt: 'circle',
})`
  height: 8rem;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation-name: spin;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5s;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Circle />
      </Container>
    );
  }
}

export default App;
