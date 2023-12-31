const CoffeeItem = ({ coffee }) => {
  return (
    <div>
      <h3>{coffee.title}</h3>
      <p className="lead fs-6">{coffee.description}</p>
      <p>
        <span className="text-success">Ingredients : </span>
        <span className="text-danger">{coffee.ingredients.join(" , ")}</span>
      </p>
    </div>
  );
};

export default CoffeeItem;
