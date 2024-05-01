import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {Navbar} from "./component/navbar/Navbar";
import {Router} from "react-router-dom";
import {AppRouter} from "./component/router/AppRouter";
import {frontNineTheme} from "./styles/theme";

const App = ()=> {


  return (
      <ChakraProvider theme={frontNineTheme}>
          <Navbar/>
          <AppRouter></AppRouter>
      </ChakraProvider>
  );
}

export default App;
