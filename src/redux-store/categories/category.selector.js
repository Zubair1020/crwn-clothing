import { createSelector } from "reselect";

<<<<<<< HEAD
const selectCategories = (state) => state.categories.categories;
=======
const selectCategories = ({ categories }) => categories.categories;
>>>>>>> dc9b14

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
<<<<<<< HEAD
    return categories.reduce((acc, category) => {
      const { title, items } = category;
=======
    return categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
>>>>>>> dc9b14
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
