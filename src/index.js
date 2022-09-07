import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import AccountForm from './components/AccountForm';

const App = () => {

    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');

    return (
    <BrowserRouter>
    <div>
        <Header />
        <Routes>
            <Route path="/" element ={<Home />}></Route>
            <Route path="/account/:action" element ={<AccountForm setToken = {setToken} />}></Route>
            <Route path="/posts" element ={<Posts posts = {posts} setPosts = {setPosts}/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)