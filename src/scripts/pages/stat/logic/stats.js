import {RequestToServer} from "../../../request/requests";
import {AccessTOKEN, statsURL} from "../../../variable/variables";
import {createCompanyList} from "../render/stats-page";
import {responseStatus} from "../../../func/response-status";


let request = new RequestToServer();

export function getAllStats(format) {
  request.getData(
    `${statsURL}${format}`,
    AccessTOKEN,
    sessionStorage.getItem('token'),
    (response) => {
      if (responseStatus(response) === true) {
        response.json().then((data) => createCompanyList(data));
      } else {
        responseStatus(response);
      }
    }
  )
}
