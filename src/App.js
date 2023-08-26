import React from "react";
import {NextUIProvider} from "@nextui-org/system";
import Dashboard from "./Component/dashboard";

function App() {
  
  return (
    <NextUIProvider>
      <Dashboard/>
    </NextUIProvider>
  );
}
export default App;