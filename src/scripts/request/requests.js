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

  async function fetchData(url, requestOptions, rememberMe) {
    try {
      const response = await fetch(url, requestOptions);
      let token = sessionStorage.setItem('token', response.headers.get('X-Auth-Token'));
      if (rememberMe) {
        token = localStorage.setItem('token', response.headers.get('X-Auth-Token'));
      }
      let result = await response.json();
    } catch (error) {
      console.error('Error message:', error);
    }
  }

export function autoLogin(token) {
  if (token) {
    fetch(`${usersURL}login`, {
      method: GET,
      headers: {
        'X-Access-Token': token,
      }
    }).then((res) => {
      console.log(res);
      return res.json();
    }).then((user) => {
      window.location.replace('home.html');
      console.log("User data: " + user);
      return true
    }).catch((error) =>{
      console.log(error);
      window.location.replace('index.html')
    });
  } else {

  }
}
