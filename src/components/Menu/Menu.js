import "./Menu.css";

const dishList = [
  {
    name: "Pizza Neptune",
    ingredients: "Tomato, tuna, onions, olives, cheese",
    image: "../images/pizza.jpg",
    price: "12",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato, mozzarella, fresh basil, olive oil, salt",
    image: "../images/margherita.jpg",
    price: "9",
  },
  {
    name: "Pizza Pepperoni",
    ingredients: "Tomato, mozzarella, pepperoni, olive oil",
    image: "../images/pepperoni.jpg",
    price: "13",
  },
  {
    name: "Pizza BBQ Chicken",
    ingredients: "BBQ sauce, chicken, mozzarella, onions, cilantro",
    image: "../images/bbq_chicken.jpg",
       price: "14"
  },
  {
    name: "Pizza Hawaiian",
    ingredients: "Tomato, mozzarella, ham, pineapple",
    image: "../images/hawaiian.jpg",
       price: "12"
  },
  {
    name: "Pizza Quattro Formaggi",
    ingredients: "Mozzarella, gorgonzola, parmesan, ricotta, olive oil",
    image: "../images/quattro_formaggi.jpg",
       price: "12",
  },
];

function Dish(props) {
  return (
    <div className="dish-item">
      <img
        src={props.content.image}
        alt={props.content.name}
        className="image-item"
      />
      <div className="dish-details">
        <h3 className="dish-title">{props.content.name}</h3>
        <p className="dish-ingredients">{props.content.ingredients}</p>
        <p className="dish-price">{props.content.price}</p>
      </div>
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
