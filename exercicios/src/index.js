import React from "react";
import ReactDOM from "react-dom";

import First from "./components/First";
import GoodMorning from "./components/GoodMorning";
import Multi, { BoaTarde } from "./components/Multi";

ReactDOM.render(
  <div>
    <Multi.BoaNoite name="Ana" />
    <BoaTarde name="Bia" />
  </div>,
  document.getElementById("root")
);
