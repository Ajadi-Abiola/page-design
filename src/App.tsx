import React from 'react';
import { KibaApp, Stack, Direction, Alignment } from '@kibalabs/ui-react';
import { buildCoolTheme } from './theme';
import {Header} from './components/header';
import{NavBar} from './components/navBar';
import {About} from './components/about';
import {WhyCat} from './components/whyCoolCat';
import {MidSection} from './components/midSection';
import {Faq} from './components/faq';
import {PreFooter} from './components/preFooter';
import {Footer} from './components/footer';
import {ImageSection} from './components/imageSection';
import {FutureofFunDog} from './components/future'

const theme = buildCoolTheme();

function App() {
  return (
    <KibaApp theme={theme}>
      <Stack direction={Direction.Vertical} isFullWidth={true} isFullHeight={true} childAlignment={Alignment.Center} contentAlignment={Alignment.Start} isScrollableVertically={true}>
      
      <Header/>
   
    
   
      <NavBar/>
     <About/>
     <ImageSection/>
    <MidSection/>
    <FutureofFunDog/>
     <Faq/>
     <PreFooter/>
     <Footer/>

      </Stack>
    </KibaApp>
  );
}

export default App;
