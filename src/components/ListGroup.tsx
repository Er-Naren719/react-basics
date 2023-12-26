function ListGroup() {
  let cities = [
    'Mumbai',
    'Delhi',
    'Banglore',
    'Hydrabad',
    'Chennai',
    'Pune'
  ];

  // cities = [];

  return (
    <>
      <h2>List of cities:</h2>
      {cities.length === 0 && <p>No cities found!</p>}
      <ul className="list-group">
        {cities.map((city, $index) => (
          <li key={$index} className="list-group-item">{city}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup