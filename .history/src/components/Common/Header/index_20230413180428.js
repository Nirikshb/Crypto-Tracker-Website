import React from 'react'
import './style.css'
function Header(){
  return (
    <div className="navbar">
      <h1 >
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">WahtchList</p>
        </a>
        <a href="/">
          <p className="link">DashBord</p>
        </a>
      </div>
    </div>
  );
}
export default Header;
