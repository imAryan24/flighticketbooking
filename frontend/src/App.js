import './App.css';
import Main from './Pages/Home/Main';
import { AuthContext } from "../src/context/authContext";
import { useContext } from "react";
import { BrowserRouter, RouterProvider, Route, Routes, Link, Navigate, } from "react-router-dom";
import Login from './Pages/Login/Login';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
  
    <div>
    <Main/>
    </div>

  
  );
}

export default App;
