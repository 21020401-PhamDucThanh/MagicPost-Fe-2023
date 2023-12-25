import React from 'react';
import './Searchbar.css';
import Timeline from './MyTimeline';
function SearchBar() {


  return (
    <div>
      {/* <form onSubmit={handleSearchSubmit}> */}
      <form>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          className='input'
          // required=''
          // // value={searchTerm}
          // // onChange={handleSearchChange}
        />

        <button className='button' type='submit' ><span className="button-content">Tra cứu đơn  </span></button>  
        <Timeline/>
      </form>    
</div>
  );
}

export default SearchBar;
