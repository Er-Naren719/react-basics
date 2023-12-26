import { useState } from "react";

function ListGroup() {
  let cities = [
    'Mumbai',
    'Delhi',
    'Banglore',
    'Hydrabad',
    'Chennai',
    'Pune'
  ];

  const [selectedindex, setSelectedindex] = useState(-1);

  return (
    <>
      <h2>List of cities:</h2>
      {cities.length === 0 && <p>No cities found!</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={index}
            className={selectedindex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => setSelectedindex(index)}>{city}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup