import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import Footer from "./component/Footer/Footer";
import {Provider} from "react-redux";
import store from "./redux/store"

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Shop/>
                <Footer/>
            </div>
        </ Provider>
    );
}

export default App;
