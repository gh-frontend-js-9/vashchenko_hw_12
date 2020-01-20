export function validEmail(emailId) {
  let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(emailId.value) === false || emailId.value.length < 8) {
    emailId.style.border = "1px solid #ff0000";
    emailId.value = "";
    emailId.placeholder = "Enter the valid Email";
  } else {
    emailId.style.border = "1px solid #ced4da";
    return true;
  }
}

export function validPassword(passwordID, confirmPasswordID) {
  if (confirmPasswordID && passwordID.value !== confirmPasswordID.value || passwordID.value <= 6 && confirmPasswordID.value <= 6) {
    passwordID.style.border = "1px solid #ff0000";
    confirmPasswordID.style.border = "1px solid #ff0000";
    passwordID.value = "";
    confirmPasswordID.value = "";
    passwordID.placeholder = "Enter the valid password";
    confirmPasswordID.placeholder = "Enter the valid password";
  } else if (passwordID.length <= 6) {
    passwordID.style.border = "1px solid #ff0000";
    passwordID.value = "";
    passwordID.placeholder = "Enter the valid password";
  } else if (confirmPasswordID) {
    confirmPasswordID.style.border = "1px solid #ced4da";
    passwordID.style.border = "1px solid #ced4da";
    return true;
  } else {
    passwordID.style.border = "1px solid #ced4da";
    return true;
  }
}

export function validName(elemById) {
  if (elemById.value.length < 4) {
    elemById.style.border = "1px solid #ff0000";
    elemById.value = "";
    elemById.placeholder = "Enter the valid Name";
  } else {
    elemById.style.border = "1px solid #ced4da";
    return true;
  }
}
