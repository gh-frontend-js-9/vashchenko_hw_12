import {RequestToServer} from "../../../request/requests";
import {AccessTOKEN, statsURL} from "../../../variable/variables";
import {createCompanyList} from "../render/stats-page";
import {responseStatus} from "../../../func/response-status";


let request = new RequestToServer();

export function getAllStats(format) {
  let token = sessionStorage.getItem('token');
  if (localStorage.getItem('token') !== null) {
    token = localStorage.getItem('token');
  }

    request.getData(
    `${statsURL}${format}`,
    AccessTOKEN,
    token,
    (response) => {
      if (responseStatus(response) === true) {
        response.json().then((data) => createCompanyList(data));
      } else {
        responseStatus(response);
      }
    }
  )
}
