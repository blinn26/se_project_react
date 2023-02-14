const ItemCard = ({ item }) => {
  console.log(item._id);

  return (
    <div>
      <div> {item.name}</div>
      <div> {item.weather}</div>
      <img src={item.link} alt={item.name} />
    </div>
  );
};

export default ItemCard;
