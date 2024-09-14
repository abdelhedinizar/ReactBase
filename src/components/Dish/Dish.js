import "./Dish.css";

function Dish(props) {
  const createRipple = (event) => {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Use getBoundingClientRect() for more accurate positioning on mobile
    const buttonRect = button.getBoundingClientRect();
    const left = event.clientX - buttonRect.left - radius;
    const top = event.clientY - buttonRect.top - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    circle.classList.add("ripple");

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };

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
      </div>
    </div>
  );
}

export default Dish;