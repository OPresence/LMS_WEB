import React, { useState } from "react";
import {
  Button,
  Modal as MD,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Target from "../../assests/target.png";
import BarChart from "../../assests/bar-chart.png";
import Telegram from "../../assests/telegram.png";
// import modals from "../../assests/images/modal.jpeg";
import modals from "../../assests/modal.png";
import "./styles.css";
import { Link } from "react-router-dom";

function Modal(args) {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <MD
        isOpen={modal}
        toggle={toggle}
        centered={true}
        className="modal__wrapper"
      >
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody className="modal__body">
          <div className="close__btn">
            <i class="fa-solid fa-xmark" onClick={() => setModal(false)}></i>
          </div>
          <div className="modal__container">
            <a
              href="https://t.me/joinTFL/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={modals} />
            </a>
            {/* <div className="left__container">
              <div className="logo"></div>
              <div className="image__wrapper">
                <img src={modals} />
              </div>
            </div>
            <div className="modal__content__wrapper">
              <div className="logo"></div>
              <div className="content">
                <h3 className="head">
                  Stock Ideas by TCI&#174;
                  <img src={Target} />
                  <img src={BarChart} />
                </h3>
                <p className="description">
                  <u>Join our free telegram channel</u> to get daily trading
                  ideas and trading hacks and tips
                </p>
                <Link to="https://t.me/joinTFL" target="_blank">
                  <button className="join__btn">
                    <img src={Telegram} />
                    <span> Join Now</span>
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </MD>
    </div>
  );
}

export default Modal;
