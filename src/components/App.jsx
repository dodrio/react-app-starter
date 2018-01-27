import React from 'react';
import { inject, observer } from 'mobx-react';
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #222;
`;

const Intro = styled.p`
  font-size: large;
`;

@inject('counterStore')
@observer
class App extends React.Component {
  onIncrease = () => this.props.counterStore.increase();
  onDecrease = () => this.props.counterStore.decrease();

  render() {
    const { counterStore } = this.props;

    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
        </Header>
        <Intro>Example Code - Simple Counter</Intro>

        <p>{counterStore.count}</p>
        <button onClick={this.onIncrease}>+</button>
        <button onClick={this.onDecrease} disabled={counterStore.isDisbaled}>
          -
        </button>
      </Container>
    );
  }
}

export default App;
