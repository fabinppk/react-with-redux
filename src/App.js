import React, { Component } from 'react';
import './stylesheets/style.scss';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Card from './components/Card/index';
import BlocoPreco from './components/BlocoPreco/index';

import { updateUserButton } from './actions/userButton-action';
import { updateUserInput } from './actions/userInput-action';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUserButton = this.onUpdateUserButton.bind(this);
    this.onUpdateUserInput = this.onUpdateUserInput.bind(this);
  }

  onUpdateUserButton() {
    this.props.onUpdateUserButton('Fabiano');
  }

  onUpdateUserInput(e) {
    this.props.onUpdateUserInput(e.target.value);
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
            <h2>Preço: R$ </h2>
          </div>
        </BlocoPreco>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  userButton: state.userButton,
  userInput: state.userInput,
  newProp: props.prop
})

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUserButton: updateUserButton,
    onUpdateUserInput: updateUserInput
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(App);
