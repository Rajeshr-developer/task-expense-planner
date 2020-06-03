import React from 'react';
import iphone from './iphone.png';
import styled from 'styled-components';
import RootContainer from './RootContainer';

const AppBg = styled.div`
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
    <AppBg>
      <Background className={'Background'} src={iphone} />
      <RootContainer/>
    </AppBg>
  );
}

export default App;
