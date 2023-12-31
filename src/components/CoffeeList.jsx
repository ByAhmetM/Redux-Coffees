import Loading from "./Loading";
import CoffeeItem from "./CoffeeItem";
const CoffeeList = ({ state }) => {
  return (
    <div className="d-flex flex-column gap-3 p-3 ">
      <span className="text-center">
        Şuanda{" "}
        <span className="text-danger fw-bold">
          {state.category === "all"
            ? "bütün"
            : state.category === "hot"
            ? "sıcak"
            : "soğuk"}
        </span>{" "}
        kahveleri görüntülüyorsunuz
      </span>
      {state.coffees.length === 0 ? (
        <Loading />
      ) : (
        state.coffees
          .filter(
            (coffee) =>
              coffee.title.toLowerCase().search(state.filterParameters) > -1
          )
          .map((coffee) => (
            <div key={coffee.id}>
              <CoffeeItem coffee={coffee} />
            </div>
          ))
      )}
    </div>
  );
};

export default CoffeeList;
