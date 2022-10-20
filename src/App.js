import"./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

export default function App()
{
    return <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/> } ></Route>
                <Route path="about" element={ <About/> } ></Route>
                <Route path="profile" element={ <Profile/> } ></Route>
                <Route path="*" element={ <h1>Page not found. 404</h1> } ></Route>
            </Routes> 
        </Router>
    </div>
}