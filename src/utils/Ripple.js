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

  export default createRipple;