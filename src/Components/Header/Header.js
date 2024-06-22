import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {Link, useNavigate} from 'react-router-dom'
import { authContext } from '../../Context/FirebaseContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Config';

function Header() {
  const {user} = useContext(authContext)
  const navigate = useNavigate();
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? `Welcome ${user.displayName}` : <Link to='/login'><span> Login</span></Link>}
          {user ? null : <Link to='/signup'><span> /Signup</span></Link>}
          <hr />
        </div>
        <div className='logout'>
          {user && <span onClick={() =>{
            signOut(auth).then(()=>{navigate('/')})
          }}>Logout</span>}
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            {user ? <Link to='/create'><span>SELL</span></Link> : <Link to='/login'><span>SELL</span></Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
