import React from "react";
import ReactDOM from "react-dom";

import First from "./components/First";
import GoodMorning from "./components/GoodMorning";
import Greetings from "./components/Greetings";
import Multi, { BoaTarde } from "./components/Multi";

ReactDOM.render(
  <div>
    <Greetings />
  </div>,
  document.getElementById("root")
);
