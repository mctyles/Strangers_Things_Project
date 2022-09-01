import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {createRoot} from 'react-dom/client'

const App = () => {
    return (
    <BrowserRouter>
    <div>
        <h1>Test heading</h1>
    </div>
    </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)