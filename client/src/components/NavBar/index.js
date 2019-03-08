import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
    
    <div className="scores">
    <ul>
        <li>
            <strong>Score:</strong> {props.score}
        </li>

        <li>
            <strong>High Score:</strong> {props.highscore}
        </li>
    </ul>
    
    </div>
    
    </nav>
  );
}

export default Navbar;
