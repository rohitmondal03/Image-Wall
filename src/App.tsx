import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Login from "./components/pages/Login"
import Dashboard from "./components/pages/Dashboard";
import NewImage from "./components/pages/NewImage";
import MainPage from "./components/pages/MainPage";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/new-image" element={<NewImage />} />
                <Route path="/signin" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
