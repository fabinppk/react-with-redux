import React, { Component } from 'react';
import './stylesheets/style.scss';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
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
        <header className="App-header">
          <div>
            <button onClick={this.onUpdateUserButton}>
              Trocar Nome
            </button>
            <p>
              { this.props.userButton }
            </p>
          </div>
          <div>
            <input onChange={this.onUpdateUserInput} placeholder="Trocar Nome" />
            <p>
              { this.props.userInput }
            </p>
          </div>
        </header>
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
