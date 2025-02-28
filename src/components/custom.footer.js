import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function CustomFooter({ translations }) {
  const top = translations.top;
  const mid = translations.middle;
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Xử lý gửi email
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Đang gửi...");

    // Cấu hình SMTP
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "your-email@gmail.com", // Thay bằng email của bạn
      Password: "your-app-password", // Thay bằng app password của bạn
      To: formData.to,
      From: "your-email@gmail.com", // Thay bằng email của bạn
      Subject: "New Signup",
      Body: formData.connect,
    })
      .then((message) => {
        setStatus(top.status.success);
        // Reset form
        setFormData({
          to: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatus(top.status.error);
      });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-inner">
          {/* footer-top */}
          <div className="footer-top bg-gray">
            <div className="container">
              <div className="footer-top-inner d-flex jtf-between alg-center">
                <div className="txt-footer-top">
                  <h4>{top.title}</h4>
                  <span>{top.description}</span>
                </div>
                <div className="form-footer-top">
                  <form onSubmit={handleSubmit}>
                    <div className="inp-footer">
                      <input
                        type="email"
                        name="to"
                        id="to"
                        placeholder={top.inputEmail}
                        onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="btn brd-non bg-blue radius-4  txt-white">
                        <span>{top.send}</span>
                      </button>
                    </div>
                  </form>
                  {status && <p>{status}</p>}
                </div>
              </div>
            </div>
          </div>
          {/* footer-main */}
          <div className="footer-main">
            <div className="container">
              <div className="footer-main-inner">
                {/* list-footer */}
                <div className="list-footer">
                  {mid.list.map((item) => (
                    <div className="item-list-footer">
                      <h3>{item.title}</h3>
                      <ul className="custom-nav">
                        {item.items.map((subItem) => (
                          <li className="first leaf">
                            <a href={subItem.link}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>{" "}
                    </div>
                  ))}
                  <div className="item-list-footer">
                    <h3>{mid.contact.title}</h3>
                    <ul className="custom-nav">
                      {mid.contact.list.map((subItem) => (
                        <li>
                          <a href={subItem.link}>
                            <span>{subItem.name}</span>
                            <span className="clr-gray">{subItem.link}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* copy-right */}
                <div className="copy-right d-flex alg-center jtf-between pt-24 pb-24">
                  <span>© 2023. All Rights Reserved</span>
                  <div className="icon-contact">
                    <ul className="custom-nav">
                      <li>
                        <a href="https://www.facebook.com/KlangAdventure">
                          <span>
                            <FontAwesomeIcon icon={faFacebook} />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/klang.adventure?fbclid=IwAR36y3jjAAtqILkL7hESKoFsXceSzdJJw1mAkGsf2C3zYUHPf65jGf2d2Aw">
                          <span>
                            <FontAwesomeIcon icon={faLinkedin} />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/klang.adventure?fbclid=IwAR36y3jjAAtqILkL7hESKoFsXceSzdJJw1mAkGsf2C3zYUHPf65jGf2d2Aw">
                          <span>
                            <FontAwesomeIcon icon={faYoutube} />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
export default CustomFooter;
