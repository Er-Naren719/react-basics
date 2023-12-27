import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"

function App() {
  const [AlertVisibility, setAlertVisibility] = useState(false);
  return <div>
    {AlertVisibility && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
    <Button onClick={() => { setAlertVisibility(true) }}>primary</Button>
  </div>
}

export default App
