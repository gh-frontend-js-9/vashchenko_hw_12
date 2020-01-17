export const signUpHTML =
  "<h2 class='h2 font-weight-bold'>Sign up</h2>" +
  "<a id='login' class='mb-3 d-block' href='#login' aria-label='Reset password' title='not a member'>Existing member</a>" +
  "<form id='signUp' class='form-group' method='post'>" +
    "<label for='nameId' hidden>Enter your email</label> " +
    "<input id='nameId' class='mb-3 form-control' name='loginEmail' type='text' placeholder='Name...' required> " +
    "<label for='emailId' hidden>Enter your email</label> " +
    "<input id='emailId' class='mb-3 form-control' name='loginEmail' type='email' placeholder='Email...' required> " +
    "<label for='passwordId' hidden>Enter your password</label> " +
    "<input id='passwordId' class='mb-3 form-control' name='loginPassword' type='text' placeholder='Password...' required> " +
    "<label for='confirmPasswordId' hidden>Confirm your password</label> " +
    "<input id='confirmPasswordId' class='mb-3 form-control' name='loginPassword' type='text' placeholder='Confirm password...' required> " +
  "</form>" +
  "<div>" +
   "<p id='errorMessage' class='text-danger invisible'>You password does not match</p> " +
  "</div>" +
  "<div class='d-flex flex-column align-items-center'>" +
    "<button id='signup' class='btn btn-success' form='signUp' name='signUpSubmit' value='submit' type='button'>Sign up</button> " +
  "</div>"
;


export async function sign(email, password, name) {
  const data = {
    email: email,
    password: password,
    name: name
  };
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch("http://localhost:3000/api/users/", options);
  let result = (await response.json());
  console.log(result);
}
