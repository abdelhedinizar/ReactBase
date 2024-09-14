import "./Dish.css";
import createRipple from "../../utils/Ripple";
import Increment from "../Increment/Increment";

function Dish(props) {

  return (
    <div className="dish-item" onClick={createRipple}>
      <img
        src={props.content.image}
        alt={props.content.name}
        className="image-item"
      />
      <div className="dish-details">
        <h3 className="dish-title">{props.content.name}</h3>
        <p className="dish-ingredients">{props.content.ingredients}</p>
        <p className="dish-price">{props.content.price}</p>
        <Increment/>
      </div>
    </div>
  );
}

export default Dish;