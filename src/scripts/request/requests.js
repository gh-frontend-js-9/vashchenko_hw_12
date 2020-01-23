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

  getData(url, headerName, headerValue, redirectPage) {
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

    fetchDataGet(url, requestOptions);
  }
}

function fetchData(url, requestOptions, rememberMe) {
  fetch(url, requestOptions)
    .then(response => {
      sessionStorage.setItem('token', response.headers.get('X-Auth-Token'));
      if (rememberMe) {
        localStorage.setItem('token', response.headers.get('X-Auth-Token'));
      }
      return response.json()
    })
    .then(result => result)
    .catch(error => console.log('Error in fetchData: ', error));
}

function fetchDataGet(url, requestOptions) {
  fetch(url, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(result => result)
    .catch(error => console.log('Error in fetchData: ', error));
}

export function autoLogin(token) {
  if (token) {
    fetch(usersURL, {
      method: GET,
      headers: {
        'X-Access-Token': token,
      }
    }).then((respons) => respons.json())
      .then((user) => {
      localStorage.setItem("myName", user.name);
      localStorage.setItem("myId", user._id);
      localStorage.setItem("myEmail", user.email);
      window.location.href = 'home.html';
      return true
    }).catch((error) => {
      console.log("Error autoLogin "+ error);
      window.location.href = 'index.html';
      return false
    });
  }
}
