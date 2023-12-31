import { actionTypes } from "../actionTypes";

const initialState = {
  coffees: [],
  category: "all",
  filterParameters: "",
};

export const coffeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEES:
      return { ...state, coffees: action?.coffeesDB };
    case actionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        category: action?.category,
        coffees: action?.filteredCoffees,
      };
    case actionTypes.FILTER:
      return {
        ...state,
        filterParameters: action?.filterParameter.toLowerCase(),
      };

    default:
      return state;
  }
};

export default coffeesReducer;
