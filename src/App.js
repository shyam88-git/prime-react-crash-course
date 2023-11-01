import React from "react";

import { Menubar } from "primereact/menubar";
import Greet from "./components/greet";

const App = () => {
  return (
    <div>
      <Menubar
        className="bg-blue-600 p-3  text-3xl text-white "
        start={"Prime React Crash Course"}
      />
      <Greet />
    </div>
  );
};

export default App;
