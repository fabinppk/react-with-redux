import React, { Component } from 'react';
import './stylesheets/style.scss';

import { connect } from 'react-redux';

import { logPageView, initGA } from './components/Analytics/index';
import Card from './components/Card/index';
import BlocoPreco from './components/BlocoPreco/index';

class App extends Component {

  componentDidMount () {
    initGA();
    logPageView();
  }

  render() {

    const products = this.props.products.map( (product) =>
      // Wrong! The key should have been specified here:
      <Card
        key={ product.id }
        image={ product.image_url }
        item_name={ product.name }
        preco={ product.price }
      />
    );

    return (
      <div className="App">
        <div className="block-cards">
          { products }
        </div>

        <BlocoPreco>
          <div className="block-preco">
            <h2>Preço: R$ { this.props.totalPrice.toFixed(2).replace('.', ',') }</h2>
          </div>
        </BlocoPreco>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    totalPrice: state.totalPrice,
    products: state.products
})

export default connect(mapStateToProps)(App);
