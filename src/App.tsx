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
  const handleSelectItems = (item: string) => {
    console.log(item)
  }
  return <div>
    <ListGroup items={cities} heading="List Of Cities" onSelectItem={handleSelectItems} />
  </div>
}

export default App
