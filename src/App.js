import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      < Router >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router >


      {/* -Use React, Node.js, Express, and MongoDB
        -Authentication
        -JWT
        -Input Check
        -CRUD
        -2-3 features
        -3rd Party API */}

    </div>
  );
}

export default App;
