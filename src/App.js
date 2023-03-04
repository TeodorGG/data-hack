import { Box, Button, Center, Container, Image, Stack, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import { ChakraProvider } from '@chakra-ui/react'

import HomeScreen from "./component/HomeScreen";
import ProfileScreen from "./component/ProfileScreen";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Flex } from '@chakra-ui/react'


const App = () => {
  

  return (
    <ChakraProvider>
    <Router>
      <Flex>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />      

      </Routes>
      </Flex>
    </Router>
  </ChakraProvider>
  );
};

export default App;