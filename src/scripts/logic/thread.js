import {RequestToServer} from "../request/requests";
import {AccessTOKEN, AppJSON, ContTYPE, threadURL, usersURL} from "../variable/variables";
import * as Render from "../render/thread-page";
import {elementToId} from "../func/elementToID";
import {CreateElement} from "../func/createElement";

let Request = new RequestToServer();

function tokenCheck() {
  let token = localStorage.getItem('token');
  if (localStorage.getItem('token') === null) {
    token = sessionStorage.getItem('token')
  }
  return token;
}


export function newCoversation() {
  Request.getData(`${usersURL}all`, AccessTOKEN, tokenCheck(), (data) => Render.allUsers(data));
}

export function newUserCoversetion(id) {
  Request.getData(`${usersURL}${id}`, AccessTOKEN, tokenCheck(), (data) => console.log(data));
}

export function allThreads() {
  Request.getData(threadURL, AccessTOKEN, tokenCheck(), (data) => Render.threadUser(data));
}

export function allThreadsMessage(threadId, userId) {
  Request.getData(`${threadURL}/messages/${threadId}`, AccessTOKEN, tokenCheck(), (data) => Render.threadMessages(data));
  Request.getData(`${usersURL}${userId}`, AccessTOKEN, tokenCheck(), (data) => Render.userProfile(data));
}

export function createNewThread(userId) {
  Request.postData(
    threadURL,
    [AccessTOKEN, ContTYPE], [tokenCheck(), AppJSON],
    {"user" : {"_id":`${userId}`}},
    (data) => console.log(data)
  );
  setTimeout(() => Request.getData(threadURL, AccessTOKEN, tokenCheck(), (data) => Render.threadUser(data)), 700);
}

export function sendMessage(message) {
  let threadId = sessionStorage.getItem('currentThread');
  let userId = sessionStorage.getItem('currentThreadUser');
  Request.postData(
    `${threadURL}/messages`,
    [AccessTOKEN, ContTYPE], [tokenCheck(), AppJSON],
    {
      "thread": {
        "_id": `${threadId}`
      },
      "message": {
        "body": message
      }
    },
    (data) => console.log(data)
  );

  setTimeout(() => Request.getData(`${threadURL}/messages/${threadId}`, AccessTOKEN, tokenCheck(), (data) => Render.threadMessages(data)), 700);
  setTimeout(() => Request.getData(`${usersURL}${userId}`, AccessTOKEN, tokenCheck(), (data) => Render.userProfile(data)), 700);
}
