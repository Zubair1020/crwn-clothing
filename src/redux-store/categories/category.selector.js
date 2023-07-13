import { createSelector } from "reselect";

const selectCategories = ({ categories }) => categories.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    const a = categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    console.log(a)
    return a;
  }
);
