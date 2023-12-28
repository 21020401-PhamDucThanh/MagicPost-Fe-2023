import "./App.css";
import BossHome from "./pages/boss/home/Boss";
import BossProfile from "./pages/boss/profile/Profile"
import BossEditProfile from "./pages/boss/profile/editProfile/EditProfile"
import BossAnalytics from "./pages/boss/analytics/Analytics"
import BossCreate from "./pages/boss/new/New"
import BossListOrder from "./pages/boss/list_order/ListOrder"
import BossUsers from "./pages/boss/users/Users"



import Service from "./pages/service/home/Service";
import Profile from "./pages/service/profile/Profile"
import EditProfile from "./pages/service/profile/editProfile/EditProfile"
import Users from "./pages/service/users/Users"
import New from "./pages/service/new/New";
import Transport from "./pages/service/transport/Transport"
import ListOrder from "./pages/service/list_order/ListOrder"
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
          <Route path="New" element={<New />} />
          <Route path="order" element={<Order />} />
          <Route path="list" element={<ListOrder />} />
          <Route path="edit_profile" element={<EditProfile />} />
          <Route path="transport" element={<Transport />} />
        </Route>

        <Route path="boss">
          <Route index element={<BossHome />} />
          <Route path="profile" element={<BossProfile />} />
          <Route path="users" element={<BossUsers />} />
          <Route path="analytics" element={<BossAnalytics />} />
          <Route path="New" element={<BossCreate />} />
          <Route path="list" element={<BossListOrder />} />
          <Route path="edit_profile" element={<BossEditProfile />} />
          <Route path="list" element={<BossListOrder />} />
        </Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;