import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
