import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../../redux-store/user/user.selector";
import { selectIsCartOpen } from "../../../redux-store/cart/cart.selector";
=======
import { selectCurrentUser } from "../../../redux-store/user/user.selector";
import { selectIsCartOpen } from "../../../redux-store/cart/cart.selector";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
>>>>>>> dc9b14

import CrwnLogo from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavLinksContainer,
  NavigationContainer,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
