import React, { Fragment } from "react";

export default (props) => (
  <Fragment>
    <h1>Bom dia {props.name}</h1>
    <h2>Até breve!</h2>
  </Fragment>
);

//export default props => [
//            <h1>Bom dia {props.name}</h1>
//            <h2>Até breve!</h2>
//  ]

//export default props =>
//        <div>
//            <h1>Bom dia {props.name}</h1>
//            <h2>Até breve!</h2>
//        </div>
