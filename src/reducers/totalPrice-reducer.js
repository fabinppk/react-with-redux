import { UPDATE_PRICE } from '../actions/totalPrice-action';

export default function totalPrice(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_PRICE:
      return payload.totalPrice;
    default:
      return state;
  }
}
