import { useState } from "react";

interface ListingGroupprops {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: ListingGroupprops) {


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
            onClick={() => {
              setSelectedindex(index);
              onSelectItem(city);
            }}
          >
            {city}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup