import { UPDATE_USER } from '../actions/userButton-action';

export default function userReducerButton(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.userButton;
    default:
      return state;
  }
}
