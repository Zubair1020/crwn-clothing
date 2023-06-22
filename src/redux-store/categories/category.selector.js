import { createSelector } from "reselect";

const selectCategories = ({ categories }) => categories.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
