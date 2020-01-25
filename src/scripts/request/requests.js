import {GET, POST, ContTYPE, AppJSON, DefREDIRECT, usersURL} from "../variable/variables";

export class RequestToServer {
  postData(url, headerName, headerValue, data, callback, redirectPage, rememberMe) {
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
    let requestData = JSON.stringify(data);


    if (Array.isArray(headerName) === true && Array.isArray(headerValue)) {
      for (let i=0; headerName.length > i; i++) {
        requestHeader.append(headerName[i], headerValue[i]);
      }
    } else {
      requestHeader.append(headerName, headerValue);
    }

    let requestOptions = {
      method: POST,
      headers: requestHeader,
      body: requestData,
      redirect: redirectPage
    };

    fetchData(url, requestOptions, callback, rememberMe);
  }

  getData(url, headerName, headerValue, callback, redirectPage) {
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

    if (Array.isArray(headerName) === true && Array.isArray(headerValue)) {
      for (let i=0; headerName.length > i; i++) {
        requestHeader.append(headerName[i], headerValue[i]);
      }
    } else {
      requestHeader.append(headerName, headerValue);
    }

    let requestOptions = {
      method: GET,
      headers: requestHeader,
      redirect: redirectPage
    };
    return fetchDataGet(url, requestOptions, callback);
  }
}

function fetchData(url, requestOptions, callback, rememberMe) {
  return fetch(url, requestOptions)
    .then(response => {
      sessionStorage.setItem('token', response.headers.get('X-Auth-Token'));
      if (rememberMe) {
        localStorage.setItem('token', response.headers.get('X-Auth-Token'));
      }
      return response.json()
    })
    .then(result => callback(result))
    .catch(error => console.log('Error in fetchData: ', error));
}

function fetchDataGet(url, requestOptions, callback) {
  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(callback)
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
      window.location.href = 'app.html';
      }).catch((error) => {
      console.error("Error autoLogin "+ error);
      window.location.href = 'index.html';
    });
  }
}
