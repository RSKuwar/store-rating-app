const StoreCard = ({ store, onRate }) => {
  return (
    <div className="store-card">
      <h3>{store.name}</h3>
      <p>{store.address}</p>
      <p>Average Rating: {parseFloat(store.average_rating).toFixed(1)}</p>
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rate 1-5"
        onChange={(e) => onRate(store.id, e.target.value)}
      />
    </div>
  );
};

export default StoreCard;
