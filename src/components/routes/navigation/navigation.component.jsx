import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <div className="logo-container">
        <CrwnLogo />
      </div>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          SHOP
        </Link>
        <Link to="/auth" className="nav-link">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;
