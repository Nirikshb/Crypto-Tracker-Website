import React from 'react'
import TemporaryDrawer from './drawer';
import './style.css'
import Button from '../Button';
import {Link} from 'react-router-dom'
function Header(){
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/">
          <p className="link">Compare</p>
        </Link>
        <Li="/">
          <p className="link">WahtchList</p>
        </=>
        <a href="/">
          <Button
            text={"Dashboard"}
            outlined={true}
            onClick={() => console.log("btncliked")}
          />
        </a>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}
export default Header;
