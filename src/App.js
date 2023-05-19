import logo from './logo.svg';
import './App.css';
import {Text,Box} from "@chakra-ui/react"
import {BrowserRouter as  Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header";
import Coins from './components/Coins';
import Exchanges from "./components/Exchanges";
import Home from "./components/Home"
import CoinDetails from "./components/CoinDetails"
import Footer from './components/Footer';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import NewUser from './Auth/NewUser';
import PrivateRoute from './Auth/PrivateRoute';
import Myaccount from './Auth/Myaccount';
import Test from "./components/Test";

function App() {
  return ( 
    <div className="App">
      
       <Router>
        <Header/>
          <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/coins" element={<Coins/>} />
              <Route path="/exchanges" element={<Exchanges/>} />
              <Route path="/coins/:id" element={
              <PrivateRoute>

                <CoinDetails/>
              </PrivateRoute>
                } />
              <Route path="/myaccount" element={
              <PrivateRoute>

                <Myaccount/>
              </PrivateRoute>
                } />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/newuser" element={<NewUser/>} />
              <Route path="/test" element={<Test/>} />
          </Routes>
          <Footer/>

       </Router>

    </div>
  );
}

export default App;
