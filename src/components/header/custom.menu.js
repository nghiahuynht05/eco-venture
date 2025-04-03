import { useState, useRef, useEffect } from "react";

const MenuPopup = ({ translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {!isOpen && (
        <div className="header-menu-mb open-close-el">
          {/* Nút mở menu */}
          <button onClick={() => setIsOpen(true)} className="">
            {/* <FontAwesomeIcon icon={faBars} className="text-xl" /> */}
            <span></span>
          </button>
        </div>
      )}
      {/* Popup menu */}
      {isOpen && (
        <div ref={menuRef} className="">
          {/* Nút đóng menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="header-menu-mb open-close-el active">
            <span></span>
          </button>

          {/* Nội dung menu */}
          <div className="header-menu open">
            <ul className="custom-nav">
              <li className="first expanded">
                <a href="/">
                  EcoVenture
                </a>
              </li>
              <li className="leaf">
                <a href="/tours">{translations.home.header.tours}</a>
              </li>
              <li className="expanded">
                <a href="/experiences">{translations.header.experiences}</a>
              </li>
              <li className="leaf">
                <a href="/sustainability">
                  {translations.header.sustainability}
                </a>
              </li>
              <li className="leaf">
                <a href="/press">{translations.header.press}</a>
              </li>
              <li className="leaf">
                <a href="/offers">{translations.header.offers}</a>
              </li>
              <li className="last leaf">
                <a href="/gallery">{translations.header.gallery}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPopup;
