import { Input } from 'antd';
import './Search.css';

const { Search } = Input;
const Searchh = () => (
  <>
    <div className='outline'>
    <h2 className='label'>Tender Search</h2>
    </div>
  <div className='search'>


  <Search className='bar' placeholder="search"  />


  </div>
  <p className='para'><a href=""><u>Advanced search?</u></a></p>    
  </>
);
export default Searchh;