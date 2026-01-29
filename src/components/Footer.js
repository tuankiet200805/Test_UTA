import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg-overlay">
        <img src="/img/bg-logo-footer.png" alt="" className="bg-shape" />
      </div>

      <div className="container position-relative z-2">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start mb-5 mb-lg-0">
            <a href="/" className="footer-brand">
              <img
                src="/img/Logo-MMed.png"
                alt="MMed Logo"
                className="footer-logo"
              />
            </a>
          </div>

          <div className="col-lg-7">
            <div className="row g-4 justify-content-center justify-content-lg-end">
              <div className="col-md-4 col-6 text-center">
                <h5 className="footer-heading">Công Ty</h5>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="#">Về Chúng Tôi</a>
                  </li>
                  <li>
                    <a href="#">Liên Hệ</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-6 text-center">
                <h5 className="footer-heading">Chuyên Gia Chăm Sóc Sức Khoẻ</h5>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="#">Điều Khoản Và Điều Kiện</a>
                  </li>
                  <li>
                    <a href="#">Chính Sách Bảo Mật</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-6 text-center">
                <h5 className="footer-heading">Tổ Chức</h5>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="#">Chính Sách Bảo Mật</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center mt-5">
          <p className="copyright-text mb-0">© 2025 MMed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
