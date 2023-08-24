import './App.css';
import {Button} from "@nextui-org/button";

function App() {
  return (
    <div className=" flex gap-4">
    <Button color="primary" variant="solid">Solid</Button>
    <Button color="primary" variant="ghost">Ghost</Button>
  </div>
  );
}

export default App;
