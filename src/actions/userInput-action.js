export const UPDATE_USER = "users:updateUserInput";

export function updateUserInput(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      userInput: newUser
    }
  }
}
