export const UPDATE_USER = "users:updateUserButton";

export function updateUserButton(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      userButton: newUser
    }
  }
}
