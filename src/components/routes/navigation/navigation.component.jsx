import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrwnLogo />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link
            to="/shop"
            className="nav-link"
          >
            SHOP
          </Link>

          {currentUser ? (
            <span
              className="nav-link"
              onClick={signOutUser}
            >
              SIGN OUT
            </span>
          ) : (
            <Link
              to="/auth"
              className="nav-link"
            >
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
