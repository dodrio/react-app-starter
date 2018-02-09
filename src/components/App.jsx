import React from 'react';
import styled from 'styled-components';
import circle from './circle.svg';

const Container = styled.div`
  text-align: center;
`;

const Circle = styled.img`
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
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

class App extends React.Component {
  state = { value: 5 };

  onIncrease = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  onDecrease = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  render() {
    const { value } = this.state;

    const currentSpeed = 10 - value;
    const isIncreaseDisabled = value >= 9;
    const isDecreaseDisabled = value <= 1;

    return (
      <Container>
        <Header>
          <Circle
            style={{ animationDuration: `${currentSpeed}s` }}
            src={circle}
            alt="circle"
          />
        </Header>

        <p>Speed Controller</p>

        <p>{value}</p>
        <button onClick={this.onIncrease} disabled={isIncreaseDisabled}>
          +
        </button>
        <button onClick={this.onDecrease} disabled={isDecreaseDisabled}>
          -
        </button>
      </Container>
    );
  }
}

export default App;
