import React, { useState , useEffect } from 'react';
import './Searchbar.css';
import MyTimeline from './MyTimeline';
import axios from 'axios';

function SearchBar() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [id, setID] = useState("");
  const [timelineData, setTimelineData] = useState(null);
  const [noOrderFound, setNoOrderFound] = useState(false);

  const resetState = () => {
    setShowTimeline(false);
    setTimelineData(null);
    setNoOrderFound(false);
  };

  useEffect(() => {
    resetState(); // Gọi resetState mỗi khi id thay đổi
  }, [id]);
  const handleChangeId = (e) => {
    setID(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: id,
    };

    try {
      const response = await axios.get(`http://localhost:8080/transaction/${id}`);
  
      if (response.status === 200) {
        console.log("Có đơn hàng ", response.data.data.location);
        setTimelineData(response.data.data.location || []);
        setShowTimeline(true);
        setNoOrderFound(false); // Đặt trạng thái không có đơn hàng thành false
      }
    } catch (error) {
      // Xử lý lỗi
      console.error("Lỗi khi tìm kiếm đơn hàng:", error);
      setNoOrderFound(true); // Đặt trạng thái không có đơn hàng thành true
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Nhập id đơn hàng"
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
      {noOrderFound && (
  <p style={{ color: 'red' }}>Không có đơn hàng nào có mã như vậy.</p>
)}
    </div>
  );
}

export default SearchBar;