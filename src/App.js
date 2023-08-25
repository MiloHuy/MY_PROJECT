import React from "react";
import {NextUIProvider} from "@nextui-org/system";

import TestPage from "./Component/sidebar";
import Main from "./Component/main";

function App() {
  
  return (
    <NextUIProvider>
      {/* <TestPage /> */}
      <Main/>
    </NextUIProvider>
  );
}
export default App;