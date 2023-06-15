import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../context/cart.context";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavLinksContainer,
  NavigationContainer,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <Link to="/">
            <img src={CrwnLogo} />
          </Link>
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">SHOP</NavLinks>

          {currentUser ? (
            <NavLinks
              as="span"
              onClick={signOutUser}
            >
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to="/auth">SIGN IN</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
