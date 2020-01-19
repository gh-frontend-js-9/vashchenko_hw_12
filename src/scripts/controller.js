import {loginForm, signUpForm} from "./page/form";

export function controller(e) {

  if (e.target.id === 'logInSubmit') {
    form();
  }
  if (e.target.id === 'signup') {
    sigupForm();
  }
  if (e.target.id === 'resetpassword') {
    resetForm();
  }
}
