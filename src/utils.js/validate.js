export function checkValidData(email, password) {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPassWordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid && !isPassWordValid) {
    return "Email and Password not valid";
  } else if (!isEmailValid) {
    return "Email id is not valid";
  } else if (!isPassWordValid) {
    return "Password is not valid";
  } else {
    return null;
  }
}
