import React from 'react';
import iphone from './iphone.png';
import styled from 'styled-components';
import RootContainer from './RootContainer';
import { Provider } from 'react-redux';
import store from './Reducers/globalStore';

const BgContainer = styled.div`
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Background = styled.img`
  width:28%;
`

function App() {
  return (
    <Provider store={store}>
      <BgContainer>
        <Background className={'Background'} src={iphone} />
        <RootContainer/>
      </BgContainer>
    </Provider>
  );
}

export default App;
