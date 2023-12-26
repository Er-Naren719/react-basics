import { useState } from "react";

interface ListingGroupprops {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListingGroupprops) {


  const [selectedindex, setSelectedindex] = useState(-1);

  return (
    <>
      <h2>{heading}:</h2>
      {items.length === 0 && <p>No cities found!</p>}
      <ul className="list-group">
        {items.map((city, index) => (
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