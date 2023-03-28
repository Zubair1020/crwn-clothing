import {  Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";


const Shop = () => (
  <div>
    <h1>I am the shop Component</h1>
  </div>
)

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="SignIn" element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;
