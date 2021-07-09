import logo from './logo.svg';
import './App.css';
import Sidebar from './SideBar';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Fragment>
          <Sidebar />
          </Fragment>
      </div>
    </Router>
  );
}

export default App;
