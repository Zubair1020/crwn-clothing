import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux-store/user/user.action";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import CheckOut from "./components/check-out/check-out.component";
import GlobalStyle from "./global.style";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Navigation />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="shop/*"
            element={<Shop />}
          />
          <Route
            path="auth"
            element={<Authentication />}
          />
          <Route
            path="checkout"
            element={<CheckOut />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
