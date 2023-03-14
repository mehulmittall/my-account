
import { Route, Routes } from 'react-router-dom'

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
 
function App() {
  return (
    <>
       <Navbar/>
        <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/myProfile" element={<myProfile/>} />
        </Routes>
    </>
  );
}
 
export default App;