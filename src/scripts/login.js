export const logInHTML =
  "<h2 class='h2 font-weight-bold'>Log in</h2>" +
  "<a id='sign' class='mb-3 d-block' href='#sign' aria-label='Reset password' title='not a member'>Not a member</a>" +
  "<form id='logIn' class='form-group' action='' method='post'>" +
  "<label for='emailId' hidden>Enter your email</label> " +
  "<input id='emailId' class='mb-3 form-control' name='loginEmail' type='email' placeholder='Email...' required> " +
  "<label for='passwordId' hidden>Enter your password</label> " +
  "<input id='passwordId' class='mb-3 form-control' name='loginPassword' type='text' placeholder='Password...' required> " +
  "</form>" +
  "<div>" +
  "<p id='errorMessage' class='text-danger invisible'>Oops, look like email or password is incorrect. Please try again.</p> " +
  "</div>" +
  "<div class='d-flex flex-column align-items-center'>" +
  "<button id='logInSubmit' class='mb-3 btn btn-success' form='logIn' name='logInSubmit' value='submit' type='button'>Log in</button> " +
  "<a id='reset' href='#reset'>Forgot password?</a>" +
  "</div>"
;

export async function logIn (email, password) {
  const data = {
    email: email,
    password: password
  };
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch("http://localhost:3000/api/users/login", options);
  let result = await response.json();
  console.log(result);
}


