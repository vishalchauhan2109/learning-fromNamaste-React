import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>GOOD-FOOD</h3>
          <p>Your go-to food delivery app—hot meals, quick delivery!</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#support">Support</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className="footer-contact">
          <p>Contact us:</p>
          <a href="mailto:support@foodie.com">support@goodFood.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GOOD-FOOD. All rights reserved.</p>
      </div>
    </footer>
  );
}
