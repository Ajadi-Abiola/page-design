import React from 'react';
import { KibaApp, Stack, Direction } from '@kibalabs/ui-react';
import { buildCoolTheme } from './theme';
import {Header} from './components/header';
import{NavBar} from './components/navBar';

const theme = buildCoolTheme();

function App() {
  return (
    <KibaApp theme={theme}>
      <Stack direction={Direction.Vertical} >
      <Header/>
      <NavBar/>
      </Stack>
    </KibaApp>
  );
}

export default App;
