import React from "react";

function navItem({ imgURL, text, id }) {
  const idTag = `#${id}`;
  return (
    <li>
      <a href={idTag} className="active">
        <span className="icon">
          <img src={imgURL.imgURL} alt="" />
          <img src={imgURL.imgURL} alt="" />
        </span>
        <span className="text">{text}</span>
      </a>
    </li>
  );
}

export default navItem;
