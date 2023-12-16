import React from 'react';
import './Searchbar.css';


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
        
      </form>    
</div>
  );
}

export default SearchBar;
