import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Login from "./components/pages/SignIn"
import Dashboard from "./components/pages/Dashboard";
import MainPage from "./components/pages/MainPage";

import "./App.css"


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signin" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
