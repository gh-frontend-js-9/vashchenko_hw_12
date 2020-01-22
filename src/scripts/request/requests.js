import {GET, POST, ContTYPE, AppJSON, DefREDIRECT, usersURL} from "../variable/variables";

export class RequestToServer {
  postData(url, headerName, headerValue, data, redirectPage, rememberMe) {
    if (!headerName) {
      headerName = ContTYPE;
    }
    if (!headerValue) {
      headerValue = AppJSON;
    }
    if (!redirectPage) {
      redirectPage = DefREDIRECT;
    }
    let requestHeader = new Headers();
    requestHeader.append(headerName, headerValue);
    let requestData = JSON.stringify(data);


    let requestOptions = {
      method: POST,
      headers: requestHeader,
      body: requestData,
      redirect: redirectPage
    };

    fetchData(url, requestOptions, rememberMe);
  }

  getData(url, headerName, headerValue, redirectPage, rememberMe) {
    if (!headerName) {
      headerName = ContTYPE;
    }
    if (!headerValue) {
      headerValue = AppJSON;
    }
    if (!redirectPage) {
      redirectPage = DefREDIRECT;
    }
    let requestHeader = new Headers();
    requestHeader.append(headerName, headerValue);

    let requestOptions = {
      method: GET,
      headers: requestHeader,
      redirect: redirectPage
    };

    fetchData(url, requestOptions, rememberMe);
  }
}

function fetchData(url, requestOptions, rememberMe) {
  fetch(url, requestOptions)
    .then((respons) => {
      console.log(respons);
      console.log(respons['_id']);
      sessionStorage.setItem('token', respons.headers.get('X-Auth-Token'));
      if (rememberMe) {
        localStorage.setItem('token', respons.headers.get('X-Auth-Token'));
      }
      return respons.json();
    }).then((result) => {
    console.log("User data Fetch: " + result);
    return result;
  }).catch((error) =>{
    console.log(error);
  });
}

export function autoLogin(token) {
  if (token) {
    fetch(usersURL, {
      method: GET,
      headers: {
        'X-Access-Token': token,
      }
    }).then((respons) => {
      console.log(respons);
      return respons.json();
    }).then((user) => {
      console.log("User data: " + user);
      console.log("User data: " + user.name);
      console.log("User data: " + user._id);
      console.log("User data: " + user.email);
      window.location.href = 'home.html';
      return true
    }).catch((error) =>{
      console.log(error);
      window.location.href = 'index.html';
      return false
    });
  } else {
    // window.location.replace('index.html')
  }
}
