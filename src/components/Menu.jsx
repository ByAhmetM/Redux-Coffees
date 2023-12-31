import { useDispatch } from "react-redux";
import { changeCategory, searchCoffees } from "../redux/actions/coffeesActions";

const Menu = ({ state }) => {
  const dispatch = useDispatch();

  const getChangeCategory = (category) => {
    dispatch(changeCategory(category));
  };

  const getSearchValue = (value) => {
    dispatch(searchCoffees(value));
  };
  return (
    <div className="p-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target[0].value = "";
        }}
      >
        <input
          placeholder="Search"
          className="form-control border border-success "
          type="text"
          onChange={(e) => getSearchValue(e.target.value)}
        />
      </form>
      <div className="menu m-3  d-flex flex-column gap-2">
        <h6
          className={
            state.category === "all" ? "text-danger" : "text-secondary "
          }
          onClick={() => getChangeCategory("all")}
        >
          All Coffees
        </h6>
        <h6
          className={
            state.category === "hot" ? "text-danger" : "text-secondary "
          }
          onClick={() => getChangeCategory("hot")}
        >
          Hot
        </h6>
        <h6
          className={
            state.category === "iced" ? "text-danger" : "text-secondary "
          }
          onClick={() => getChangeCategory("iced")}
        >
          Iced
        </h6>
      </div>
    </div>
  );
};

export default Menu;
