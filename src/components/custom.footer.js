import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
    setStatus("Sending...");

    // Cấu hình SMTP
    emailjs
      .send(
        "service_vo852ys",
        "template_j9ecejp",
        formData,
        "jL6JHRUVditpYnQBs"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setStatus("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email.", error);
          setStatus("Failed to send email.");
        }
      );
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
                        name="email"
                        id="email"
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
                      <li>
                        <span>General Information</span>
                        <span className="clr-gray">
                          <a href="mailto:ecoventuretourist@gmail.com"></a>
                          ecoventuretourist@gmail.com
                        </span>
                      </li>
                      <li>
                        <span>Facebook</span>
                        <span className="clr-gray">
                          <a href="https://www.facebook.com/profile.php?id=61552275430181"></a>
                          https://facebook.com/EcoVenture
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* copy-right */}
                <div className="copy-right d-flex alg-center jtf-between pt-24 pb-24">
                  <span>© 2025. All Rights Reserved</span>
                  <div className="icon-contact">
                    <ul className="custom-nav">
                      <li>
                        <a href="">
                          <span>
                            <FontAwesomeIcon icon={faFacebook} />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>
                            <FontAwesomeIcon icon={faLinkedin} />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="">
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
