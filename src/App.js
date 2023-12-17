import "./App.css";
import Service from "./pages/service/home/Service";
import Profile from "./pages/service/profile/Profile"
import Analytics from "./pages/service/analytics/Analytics"
import Users from "./pages/service/users/Users"
import Create from "./pages/service/new/New"
import Order from "./pages/service/order/Order"

import { productInputs, userInputs } from "./formSource";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { useContext } from "react";


import Login from "./LoginAccount/Login";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />     {/* mặc định HomePage trước sẽ hiển thị trước */}
        
        <Route path="/Login" element={<Login />} />
        <Route path="/HomePage" element={<Homepage />} />
        <Route path="service">
          <Route index element={<Service />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<Users />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="create" element={<Create />} />
            <Route path="order" element={<Order />} />


          </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;