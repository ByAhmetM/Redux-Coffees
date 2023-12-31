import Menu from "./components/Menu";
import CoffeeList from "./components/CoffeeList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "./redux/actions/coffeesActions";
const App = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="row border border-success m-3 ">
      <div className="col-md-3 border-end border-success  p-3  ">
        <Menu state={state} />
      </div>
      <div className="col-md-9 border-start border-success  p-3   ">
        <CoffeeList state={state} />
      </div>
    </div>
  );
};

export default App;
