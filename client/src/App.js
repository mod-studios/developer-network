import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme/schema.json'
import { GlobalStyle } from './styles/global'
import Layout from './layouts/Layout';
import Landing from './components/Landing/Landing';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Developers from './components/Developers/Developers';

function App() {
  return (
    <ThemeProvider theme={theme.data.light}>
      <GlobalStyle />
      <Layout>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/developers" render={() => <Developers />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/signup" render={() => <Signup />} />
      </Layout>
    </ThemeProvider>
  )
}

export default App;
