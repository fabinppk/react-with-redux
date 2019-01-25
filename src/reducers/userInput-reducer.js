import { UPDATE_USER } from '../actions/userInput-action';

export default function userReducerInput(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.userInput;
    default:
      return state;
  }
}
