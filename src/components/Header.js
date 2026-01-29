import React, { useState } from "react";
import "../css/Header.css";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-top">
      <div className="d-flex justify-content-between align-items-center h-100 container-fluid px-3 px-lg-4">
        <div className="brand-wrapper">
          <img
            src="/img/bg-logo-header.png"
            alt="logo-back"
            className="bg-layer"
          />
          <div className="content-layer">
            <a href="#">
              <img
                src="/img/Logo-MMed.png"
                alt="MMed Logo"
                className="logo-main"
              />
            </a>
            <span className="logo-text">for Healthcare Professionals</span>
          </div>
        </div>

        <div className="nav-buttons d-none d-lg-flex align-items-center">
          <a href="#" className="btn-login">
            Đăng nhập
          </a>
          <button className="btn-signup">Tham gia miễn phí</button>
        </div>

        <div className="hamburger-menu d-lg-none" onClick={toggleMenu}>
          <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        </div>

        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-content">
            <a href="#" className="btn-login-mobile">
              Đăng nhập
            </a>
            <button className="btn-signup-mobile">Tham gia miễn phí</button>
          </div>
        </div>
      </div>
    </header>
  );
};
