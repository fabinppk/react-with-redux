import { UPDATE_USER } from '../actions/userInput-action';

export default function userReducerInput(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      if(payload.userInput == ""){
        return "-";
      }
      return payload.userInput;
    default:
      return state;
  }
}
