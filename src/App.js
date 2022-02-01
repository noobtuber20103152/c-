import './App.css';
import Intro from './Basics/Intro';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Basics/Home';
import GetStarted from './Basics/GetStarted';
import Syntex from './Basics/Syntex';
import Output from './Basics/Output';
import Comments from './Basics/Comments';
import Variable from './Basics/Variable';
import UserInput from './Basics/UserInput';
import DataTypes from './Basics/DataTypes';
import Operator from './Basics/Operator';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes><Route exact path="/c-" element={<Home/>}></Route></Routes>
        <Routes><Route exact path="/basics/Intro" element={<Intro/>}></Route></Routes>
        <Routes><Route exact path="/basics/GetStarted" element={<GetStarted/>}></Route></Routes>
        <Routes><Route exact path="/basics/Syntex" element={<Syntex/>}></Route></Routes>
        <Routes><Route exact path="/basics/Output" element={<Output/>}></Route></Routes>
        <Routes><Route exact path="/basics/Comments" element={<Comments/>}></Route></Routes>
        <Routes><Route exact path="/basics/Variables" element={<Variable/>}></Route></Routes>
        <Routes><Route exact path="/basics/Userinputs" element={<UserInput/>}></Route></Routes>
        <Routes><Route exact path="/basics/Datatypes" element={<DataTypes/>}></Route></Routes>
        <Routes><Route exact path="/basics/Operators" element={<Operator/>}></Route></Routes>
      </Router>

    </>
  );
}

export default App;
