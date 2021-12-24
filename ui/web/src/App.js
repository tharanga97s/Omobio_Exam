import React from "react";

import ContextProvider from "./ContextProvider/ContextProvider";
import Home from "./components/Home";

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
