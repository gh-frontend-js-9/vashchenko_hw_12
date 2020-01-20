import {GET, POST, ContentType, AppJSON, DefREDIRECT} from "../variable/variables";

export class RequestToServer {

  postData(url, headerName, headerValue, data, redirectPage) {
    if (!headerName) {
      headerName = ContentType;
    }
    if (!headerValue) {
      headerValue = AppJSON;
    }
    if (!redirectPage) {
      redirectPage = 'follow'
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

    let promises =  fetchData(url, requestOptions);
    console.log(promises);
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

    let promises =  fetchData(url, requestOptions);
    console.log(promises);
  }
}

  async function fetchData(url, requestOptions) {
    console.log(url);
    console.log(JSON.stringify(requestOptions));
    try {
      const response = await fetch(url, requestOptions);
      let result = await response.json();
      console.log(localStorage.token);
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }
