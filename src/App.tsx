import ListGroup from './components/ListGroup';

function App() {
  let cities = [
    'Mumbai',
    'Delhi',
    'Banglore',
    'Hydrabad',
    'Chennai',
    'Pune'
  ];
  return <div>
    <ListGroup items={cities} heading="List Of Cities" />
  </div>
}

export default App
