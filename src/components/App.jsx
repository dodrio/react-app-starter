import React from 'react';
import { inject, observer } from 'mobx-react';
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

@inject('speedStore')
@observer
class App extends React.Component {
  onIncrease = () => this.props.speedStore.increase();
  onDecrease = () => this.props.speedStore.decrease();

  render() {
    const { speedStore } = this.props;

    return (
      <Container>
        <Header>
          <Circle
            style={{ animationDuration: `${speedStore.currentSpeed}s` }}
            src={circle}
            alt="circle"
          />
        </Header>

        <p>Speed Controller</p>

        <p>{speedStore.value}</p>
        <button
          onClick={this.onIncrease}
          disabled={speedStore.isIncreaseDisabled}
        >
          +
        </button>
        <button
          onClick={this.onDecrease}
          disabled={speedStore.isDecreaseDisabled}
        >
          -
        </button>
      </Container>
    );
  }
}

export default App;
