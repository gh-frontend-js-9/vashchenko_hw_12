export const resetPasswordHTML =
  "<h2 class='h2 font-weight-bold'>Reset password</h2>" +
  "<a id='sign' class='mb-3 d-block' href='#sign' aria-label='Reset password' title='not a member'>Not a member</a>" +
  "<p class='mb-3 d-block'>Please enter your new password</p>" +
  "<form id='resetPas' class='form-group' method='post'>" +
  "<label for='emailId' hidden>Enter your email</label> " +
  "<input id='emailId' class='mb-3 form-control' name='loginEmail' type='email' placeholder='Email...' required> " +
  "<label for='passwordId' hidden>Enter your password</label> " +
  "<input id='passwordId' class='mb-3 form-control' name='loginPassword' type='text' placeholder='Password...' required> " +
  "<label for='confirmPasswordId' hidden>Confirm your password</label> " +
  "<input id='confirmPasswordId' class='mb-3 form-control' name='loginPassword' type='text' placeholder='Confirm password...' required> " +
  "</form>" +
  "<div>" +
  "<p id='errorMessage' class='text-danger invisible'>You password does not match or your account was not found</p> " +
  "</div>" +
  "<div class='d-flex flex-column align-items-center'>" +
  "<button id='resetpassword' class='btn btn-success' form='resetPas' name='resetSubmit' value='submit' type='button'>Sign up</button> " +
  "</div>"
;

export async function reset(email, password, confirmPassword) {
  const data = {
    email: email,
    password:  password,
    confirmationPassword: confirmPassword
  };
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch("http://localhost:3000/api/users/reset_password/", options);
  let result = await response.json();
  console.log(result);
}
