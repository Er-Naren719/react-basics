import { MouseEvent } from "react";

function ListGroup() {
  let cities = [
    'Mumbai',
    'Delhi',
    'Banglore',
    'Hydrabad',
    'Chennai',
    'Pune'
  ];

  const clickHandler = (event: MouseEvent) => {
    console.log(event);
  }

  return (
    <>
      <h2>List of cities:</h2>
      {cities.length === 0 && <p>No cities found!</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index} className="list-group-item" onClick={clickHandler}>{city}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup