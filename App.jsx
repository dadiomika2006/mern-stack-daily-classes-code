import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/style.css";
import LandingPage from "./pages/LandingPage"
const App=()=>{

  return(
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="home" element ={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;