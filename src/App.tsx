import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Main } from './pages';


class App extends React.Component {
  render(){
    return (
      <section>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Main" element={<Main />} />
          </Routes>
        </Router>
      </section>
    );
  }
}

export default App;
