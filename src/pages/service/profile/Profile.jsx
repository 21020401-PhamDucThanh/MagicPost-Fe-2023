import "./profile.scss";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(userId);

    axios
      .get(`http://localhost:8080/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const user = response.data.data;
        console.log(user);

        const { name, email, phone, age } = user;

        setName(name);
        setEmail(email);
        setPhone(phone);
        setAge(age);
      })
      .catch((error) => {
        console.error(error);
        // Xử lý lỗi
      });
  }, []);

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <div className="top">
          <div className="left">
            <Link to="/service/edit_profile">
              <div className="editButton">Chỉnh sửa</div>
            </Link>

            <h1 className="title">Thông tin cá nhân</h1>
            <div className="item">
              <img
                src="\images\1.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tuổi:</span>
                  <span className="itemValue">{age}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">Cầu Giấy - Hà Nội</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">0338593926</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;