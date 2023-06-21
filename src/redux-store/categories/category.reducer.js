import { CATEGORIES_ACTION_TYPES } from "./category.types";

<<<<<<< HEAD
const CATEGORY_INITIAL_STATE = {
=======
const CATEGORIES_INITIAL_STATE = {
>>>>>>> dc9b14
  categories: [],
};

export const categoriesReducer = (
<<<<<<< HEAD
  state = CATEGORY_INITIAL_STATE,
=======
  state = CATEGORIES_INITIAL_STATE,
>>>>>>> dc9b14
  { type, payload } = {}
) => {
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
