import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      
      {/* if login then go to payment page
      else login page */}

      <Link to="/">
        <img
          className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGZCk2pgkCNIbk6yL2r1a4z0Irk6hOjhESQ&s"
        />
      </Link>

      <div className="header-title">Coupon Pay</div>

      {/* Profile Image or First Letter of Name (conditionally rendered in future) */}
      <div className="profile-img">
        <Link to="/">
          <img
            alt="user"
            title="Profile"
            src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;