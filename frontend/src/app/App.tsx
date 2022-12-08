import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../css/App.css';
import Router from "./Router";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Router/>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;