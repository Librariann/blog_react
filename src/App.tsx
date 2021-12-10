import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './StyledComponent/GlobalStyle';
import { Home, Main } from './pages';


class App extends React.Component {
  render(){
    return (
      <>
        <GlobalStyle/>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Main" element={<Main />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
