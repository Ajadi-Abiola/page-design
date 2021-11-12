import React from 'react';
import { KibaApp} from '@kibalabs/ui-react';

import { buildCoolTheme } from './theme';
import { HomePage } from './components/Homepage/'

const theme = buildCoolTheme();

function App() {
  return (
    <KibaApp theme={theme}>
     <HomePage/>
    </KibaApp>
  );
}
export default App;
