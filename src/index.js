import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
    return (
    <BrowserRouter>
    <div>
        <Header />
        <Routes>
            <Route path="/" element ={<Home />}></Route>
            <Route path="/login" element ={<Login />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)