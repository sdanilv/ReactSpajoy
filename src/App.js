import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header/Header";
// import FindForm from "./component/Shop/FindForm/FindForm";
import Shop from "./component/Shop/Shop";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App" >
    <Header />
    <Shop />
    <Footer />
    </div>
  );
}

export default App;
