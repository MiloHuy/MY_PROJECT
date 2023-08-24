import './App.css';
import {Button} from "@nextui-org/button";

function App() {
  return (
    <div className="flex gap-4">
    <Button color="primary" variant="solid">Solid</Button>
    <Button color="primary" variant="ghost">Ghost</Button>
    <Button className="px-unit-2 py-unit-1 min-w-unit-3xl" color='primary'>
      My Button
    </Button>
    <Button>Press me</Button>
  </div>
  );
}

export default App;
