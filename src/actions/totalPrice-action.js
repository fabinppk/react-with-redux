export const UPDATE_PRICE = "totalPrice:updatePrice";

export function updatePrice(newprice) {
  return {
    type: UPDATE_PRICE,
    payload: {
      totalPrice: newprice
    }
  }
}
