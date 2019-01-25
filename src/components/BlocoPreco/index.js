import React, { Component } from "react";
import "../../components/BlocoPreco/index.scss";

class BlocoPreco extends Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default BlocoPreco;
