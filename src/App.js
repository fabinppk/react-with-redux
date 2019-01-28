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
    return (
      <div className="App">
        <div className="block-cards">
          <Card
            image="https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg"
            item_name="Cadeira 1"
            preco="30,00"
          />

          <Card
            image="https://bimbon-assets.s3.amazonaws.com/ckeditor/picture/data/53fcf699f36933130500257f/content_poltrona_barcelona_preta_1.jpg"
            item_name="Cadeira 2"
            preco="50,00"
          />
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
    totalPrice: state.totalPrice
})

export default connect(mapStateToProps)(App);
