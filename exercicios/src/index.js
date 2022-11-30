import React from "react";
import ReactDOM from "react-dom";

import Child from "./components/Child";
import First from "./components/First";
import GoodMorning from "./components/GoodMorning";
import Greetings from "./components/Greetings";
import Multi, { BoaTarde } from "./components/Multi";
import Parent from "./components/Parent";

ReactDOM.render(
  <div>
    <Parent name="Amanda" sobrenome="Fernades">
        <Child name="Paulo"/>
        <Child name="Maria"/>
        <Child name="Carlos"/>
    </Parent>
  </div>,
  document.getElementById("root")
);
