import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { NavBar } from './components/Navbar';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { ProjectsPage } from './pages/Projects'


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })
const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-me" exact component={AboutPage  } />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;