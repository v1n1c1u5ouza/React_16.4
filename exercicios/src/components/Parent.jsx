import React from "react";
import { childrenWithProps } from "../utils/utils";

export default (props) => (
  <div>
    <h1>
      {props.name} {props.sobrenome}
    </h1>
    <h2>Filhos</h2>
    <ul>{childrenWithProps(props)}</ul>
  </div>
);
