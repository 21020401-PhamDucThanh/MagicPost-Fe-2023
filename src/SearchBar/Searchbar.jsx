import React, { useState } from 'react';
import './Searchbar.css';
import MyTimeline from './MyTimeline';
import axios from 'axios';

function SearchBar() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [id, setID] = useState("");
  const [timelineData, setTimelineData] = useState(null);

  const handleChangeId = (e) => {
    setID(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: id,
    };

    try {
      const response = await axios.get(
        `http://localhost:8080/transaction/${id}`, // Sử dụng ID trong endpoint
        data
      );

      if (response.status === 200 ) {
        console.log("Có đơn hàng ", response.data.data.location);
        setTimelineData(response.data.data.location || []); // Set timelineData với mảng hoặc mảng trống nếu không có dữ liệu
        setShowTimeline(true); // Hiển thị Timeline sau khi tìm kiếm thành công
      } else {
        alert("Lỗi search");
      }
    } catch (error) {
      console.error("Search fail", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          className='input'
          value={id}
          onChange={handleChangeId}
        />
        <button className='button' type='submit'>
          <span className="button-content">Tra cứu đơn</span>
        </button>
      </form>

      {showTimeline && timelineData && (
        <MyTimeline data={timelineData} />
      )} {/* Render the Timeline with data when showTimeline is true */}
    </div>
  );
}

export default SearchBar;