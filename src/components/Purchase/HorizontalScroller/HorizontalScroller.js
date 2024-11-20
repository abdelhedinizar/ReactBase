export default function HorizontalScroller({ dishes }) {
  return (
    <div className="media-scoller">
      {dishes?.length > 0 &&
        dishes.map((dish) => {
          return (
            <div className="media-element">
              <img src={dish.dish.image} alt={dish.dish.name} />
            </div>
          );
        })}
    </div>
  );
}
