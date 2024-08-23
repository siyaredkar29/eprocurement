import { Input } from 'antd';
import './Search.css';
import { useState } from 'react';
import TenderByName from '../Pages/TenderByLocation/Name';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Searchh = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    console.log('Search input value:', value);
    setSearchValue(value);
    // You can do something with the value here
  };

  return (
    <>
      <div className='outline'>
        <h2 className='label'>Tender Search</h2>
      </div>
      <div className='search'>
        <Search
          className='bar'
          placeholder="search"
          onSearch={handleSearch} // This will capture the value when the user presses Enter or clicks the search icon
        />
      </div>
      <p className='para'>
      <Link to="/tender-by-location">
        <u>Advanced search?</u>
      </Link>      </p> 
      {searchValue && <TenderByName searchTerm={searchValue} />}
    </>
  );
};

export default Searchh;