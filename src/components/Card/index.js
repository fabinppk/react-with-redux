import React, { Component } from 'react';
import '../../components/Card/index.scss';

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { updatePrice } from '../../actions/totalPrice-action';

class Card extends Component {

  constructor(props) {
    super(props);
    this.onUpdatePrice = this.onUpdatePrice.bind(this);
    this.state = {
      adicionado: false
    }
  }

  onUpdatePrice() {
    if(this.state.adicionado){
      this.props.onUpdatePrice(parseFloat(this.props.totalPrice) - parseFloat(this.props.preco));
      this.setState({ adicionado: false});
    }else{
      this.props.onUpdatePrice(parseFloat(this.props.totalPrice) + parseFloat(this.props.preco));
      this.setState({ adicionado: true});
    }
  }

  render() {
    const adicionado = this.state.adicionado;

    return(
      <div className="wrapper">
        <div className={ adicionado ? 'container adicionado' : 'container' }>
          <div className="top">
            <img src={ this.props.image } alt={ this.props.item_name }/>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h2 className="item-nome">{ this.props.item_name }</h2>
                <p className="item-preco">R$ { this.props.preco }</p>
              </div>
              <div className="buy" onClick={ this.onUpdatePrice }>{ adicionado ? 'Remover' : 'Adicionar' }</div>
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
