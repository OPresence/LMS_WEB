import React from "react";
import "./styles.css";
import TradingBackground from "../../assests/images/stock.jpg"; 
import InstagramIcon from "../../assests/images/instagram.png";
import TelegramIcon from "../../assests/telegram.png";
import WhatsAppIcon from "../../assests/images/whatsapp.png";

export default function SocialContent() {
  return (
    <div className="social__content__container">
      <section
        className="social__content__wrapper"
        style={{ backgroundImage: `url(${TradingBackground})` }}
      >
        <div className="background__overlay"></div>
        <div className="grid-container">
          <div className="grid-item">
            <img src={InstagramIcon} alt="Instagram Icon" className="social-icon" />
            <div className="counter counter-white">600+</div>
            <button className="join-button">Join Now</button>
          </div>
          <div className="grid-item">
            <img src={TelegramIcon} alt="Telegram Icon" className="social-icon" />
            <div className="counter counter-white">600+</div>
            <button className="join-button">Join Now</button>
          </div>
          <div className="grid-item">
            <img src={WhatsAppIcon} alt="WhatsApp Icon" className="social-icon" />
            <div className="counter counter-white">600+</div>
            <button className="join-button">Join Now</button>
          </div>
        </div>
        <div className="section__header">
          <h1>Become a Master Trader</h1>
          <p>Unlock the secrets of successful trading</p>
          <button className="join-button">Join Now</button>
        </div>
      </section>
    </div>
  );
}
