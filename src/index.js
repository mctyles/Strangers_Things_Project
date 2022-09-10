import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import { fetchUser } from './api';

import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import AccountForm from './components/AccountForm';
import SinglePost from './components/SinglePost';

const App = () => {

    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem('token') || '');
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                const user = await fetchUser(token);
                setUser(user);
            }
            getUser();
        }
    }, [token])

    useEffect (() => {
        window.localStorage.setItem('token', token)
    }, [token])

    return (
    <BrowserRouter>
    <div>
        <Header token = {token} setToken = {setToken}/>
        <Routes>
            <Route path="/" element ={<Home token = {token} user = {user}/>}></Route>
            <Route path="/account/:action" element ={<AccountForm setToken = {setToken} />}></Route>
            <Route path="/posts" element ={<Posts posts = {posts} setPosts = {setPosts} token={token}/>}></Route>
            <Route path="/posts/:postId" element={<SinglePost posts={posts} setPosts={setPosts} token={token} />}
        />
        </Routes>
    </div>
    </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)