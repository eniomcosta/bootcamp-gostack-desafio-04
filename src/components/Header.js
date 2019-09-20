import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header-left">facebook</div>
      <div className="header-right">
        <a>
          Meu perfil <FaUserCircle />
        </a>
      </div>
    </div>
  );
}

export default Header;
