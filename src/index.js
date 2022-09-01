import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {createRoot} from 'react-dom/client'

import Header from './components/Header'

const App = () => {
    return (
    <BrowserRouter>
    <div>
        <Header />
        <h1>Test heading</h1>
    </div>
    </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)