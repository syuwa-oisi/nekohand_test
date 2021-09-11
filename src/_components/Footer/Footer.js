import React from "react";
import "./Footer.css";
import logo from "../../_assets/images/png/Header_logo.png";

const Footer = () => {
  return (
    <footer className="footer-detail-container">
      <div className="footer-detail-container--inner center-box">
        <div className="footer-detail-top--inner flex-row">
          <a href="/">
            <img className="footer-detail-logo" src={logo} alt="ロゴ画像" />
          </a>
          <div className="copy-detail arial">© 2021 Rayward Inc.</div>
        </div>
        <div className="footer-detail-middle--inner flex-row">
          <div className="footer-detail-menu-text">
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              特定商取引法に基づく表記
            </a>
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              プライバシーポリシー
            </a>
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              利用規約
            </a>
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              ロイヤルティ利用規約
            </a>
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              会社概要
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;