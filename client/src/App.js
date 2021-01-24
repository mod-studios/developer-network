import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme/schema.json'
import { GlobalStyle } from './styles/global'
import Layout from './layouts/Layout';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <ThemeProvider theme={theme.data.light}>
      <GlobalStyle />
      <Layout>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/test" render={() => <p>test2</p>} />
      </Layout>
    </ThemeProvider>
  )
}

export default App;
