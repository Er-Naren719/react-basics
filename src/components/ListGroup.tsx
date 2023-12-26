function ListGroup() {
  const cities = [
    'Mumbai',
    'Delhi',
    'Banglore',
    'Hydrabad',
    'Chennai',
    'Pune'
  ];
  return (
    <>
      <h2>List Group Heading</h2>
      <ul className="list-group">
        {cities.map((city, $index) => (
          <li key={$index} className="list-group-item">{city}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup