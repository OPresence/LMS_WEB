import React from "react";
import "./styles.css";

import Ebook from "../../assests/ebook.svg";
import Download from "../../assests/download.svg";
import Chat from "../../assests/chat.svg";

export default function SocialContent() {
  return (
    <section className="social__content__wrapper">
      <div className="usefull__links">
        <div className="section__header">
          <h2> Usefull Links</h2>
        </div>
        <div className="usefull__links__container">
          <div className="usefull__link__item">
            <div className="item__image__wrapper">
              <img src={Ebook} />
            </div>
            <h3>Ebooks</h3>
          </div>
          <div className="usefull__link__item">
            <div className="item__image__wrapper">
              <img src={Download} />
            </div>
            <h3>Downloads</h3>
          </div>
          <div className="usefull__link__item">
            <div className="item__image__wrapper">
              <img src={Chat} />
            </div>
            <h3>Talk Us</h3>
          </div>
        </div>
      </div>
      <div className="social__media">
        <div className="section__header">
          <h2> Social Media</h2>
        </div>
        {/* <p>People love what we do! Have a look</p> */}
        <div className="social__media__container">
          <div className="social__media__item"></div>
          <div className="social__media__item"></div>
          <div className="social__media__item"></div>
        </div>
      </div>
    </section>
  );
}
