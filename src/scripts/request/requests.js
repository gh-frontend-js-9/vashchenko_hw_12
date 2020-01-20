// POST SIGN UP
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"email":"john.doe@email.com","password":"11111111","name":"John Doe"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// POST LOG IN
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"email":"john.doe@email.com","password":"44444444"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// POST RESET
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"password":"44444444","confirmationPassword":"44444444","email":"john.doe@email.com"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// GET Get current user
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// GET Get all users
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/all", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// GET Get user by id
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/5e19c223a4199c002275268a", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// GET Retrieve all threads
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// GET Retrieve all thread messages
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/5e1a1c818ec2f49ab3e59ab2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// POST Create a thread
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"user":{"_id":"5e19c223a4199c002275268a"}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// POST Send message
var myHeaders = new Headers();
myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk0Mzk3MjJ9.-SbOnQ997-0pDHoqw8cuFe2cKJyD0CTY1Y8leUGTpwY");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"thread":{"_id":"5e1a1c818ec2f49ab3e59ab2"},"message":{"body":"Hello, friend!"}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
