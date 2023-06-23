import React from 'react'

function Header(){
  return (
    <div className="navbar">
      <h1>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Com</p>
        </a>
        <a href="/">
          <p className="link">Home</p>
        </a>
      </div>
    </div>
  );
}
export default Header;
