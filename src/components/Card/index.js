import React, { Component } from 'react';
import '../../components/Card/index.scss';

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { updatePrice } from '../../actions/totalPrice-action';

class Card extends Component {

  constructor(props) {
    super(props);
    this.onUpdatePrice = this.onUpdatePrice.bind(this);
  }

  onUpdatePrice() {
    this.props.onUpdatePrice(parseFloat(this.props.totalPrice) + parseFloat(this.props.preco));
  }

  render() {
    return(
      <div className="wrapper">
        <div className="container">
          <div className="top">
            <img src={ this.props.image } alt={ this.props.image }/>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h2 className="item-nome">{ this.props.item_name }</h2>
                <p className="item-preco">RS: { this.props.preco }</p>
              </div>
              <div className="buy" onClick={ this.onUpdatePrice }>Adicionar</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totalPrice: state.totalPrice
})

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdatePrice: updatePrice
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Card);
