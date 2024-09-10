const dishList = [
  {
    name: "Pizza Neptune",
    ingredients: "Tomato, tuna, onions, olives, cheese",
    image: "../images/pizza.jpg",
  },
  {
    name: "Pizza 4 Seasons",
    ingredients: "Tomato, cheese, chill, olives",
    image: "../images/pizza.jpg",
  },
];

function Dish(props) {
  return (
    <div>
      <img src={props.content.image} alt={props.content.name} />
      <h2>{props.content.name}</h2>
      <p>{props.content.ingredients}</p>
    </div>
  );
}


function Menu() {
  return (
    <main>
      <h2>
        Our <span className="menucolor">Menu</span>
      </h2>
      <div className="menu-content">
        {dishList.length > 0 &&
          dishList.map((dish) => {
            return <Dish content={dish} key={dish.name} />;
          })}
      </div>
    </main>
  );
}

export default Menu;