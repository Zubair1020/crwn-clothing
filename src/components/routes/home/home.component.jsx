import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCategories } from "../../../redux-store/categories/category.action";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

import Directory from "../../directory/directory.component";

const Home = () => {
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryMap));
    };
    getCategoriesMap();
  }, []);
>>>>>>> dc9b14
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
