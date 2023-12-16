import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./LoginAccount/Login";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />     {/* mặc định HomePage trước sẽ hiển thị trước */}
        
        <Route path="/Login" element={<Login />} />
        <Route path="/HomePage" element={<Homepage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;