import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>this is Footer</div>
      <img
        src="https://images.unsplash.com/photo-1676807882679-7cb547cc6c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          padding: "0px 20px",
        }}
      />
    </div>
  );
}

export default Footer;
