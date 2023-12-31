import { actionTypes } from "./../actionTypes";
import { coffeesDB } from "./../../../coffees";

export const getData = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_COFFEES, coffeesDB });
};

export const changeCategory = (category) => async (dispatch) => {
  try {
    const filteredCoffees =
      category === "all"
        ? coffeesDB
        : coffeesDB.filter((coffee) => coffee.category === category);
    dispatch({ type: actionTypes.CHANGE_CATEGORY, category, filteredCoffees });
  } catch (error) {
    console.log(error);
  }
};

export const searchCoffees = (filterParameter) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.FILTER, filterParameter });
  } catch (error) {
    console.log(error);
  }
};
