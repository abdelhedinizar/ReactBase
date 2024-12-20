const Dish = ({ dish }) => {
  return (
    <div className="dish-item">
      <div className="mt-4 flex text-sm/6 text-gray-600">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>

          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
          />
        </label>
      </div>
      <img src={dish.image} alt={dish.name} className="image-item" />
      <div className="dish-details">
        <h3 className="dish-title">{dish.name}</h3>
        <p className="dish-ingredients">{dish.ingredients}</p>
        <p className="dish-price">{dish.price} €</p>
      </div>
    </div>
  );
};

export default Dish;
