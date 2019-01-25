import React, { Component } from 'react';
import '../../components/Card/index.scss';

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Card extends Component {

  constructor(props) {
    super(props);
    this.adicionarItem = this.adicionarItem.bind(this);
  }

  adicionarItem() {
    console.log('ADICIONA');
    this.props.adicionarItem(this.props.preco, this.props.item_name);
  }

  render() {
    return(
      <div className="wrapper">
        <div className="container">
          <div className="top">
            <img src={ this.props.image } />
          </div>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h2 className="item-nome">{ this.props.item_name }</h2>
                <p className="item-preco">RS: { this.props.preco }</p>
              </div>
              <div className="buy" onClick={ this.adicionarItem }>Adicionar</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
