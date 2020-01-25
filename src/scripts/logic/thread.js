import {RequestToServer} from "../request/requests";
import {AccessTOKEN, AppJSON, ContTYPE, threadURL, usersURL} from "../variable/variables";
import {CreateElement} from "../func/createElement";
import * as Render from "../render/thread-page";

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


// GET DATA
document.addEventListener('click', function(e) {

  if (e.target.id === 'testCreateThread') {
    getUser.postData(threadURL, [AccessTOKEN, ContTYPE], [sessionStorage.getItem('token'), AppJSON],
      SendData({
        "user" : {
          "_id":"5e19c223a4199c002275268a"
        }
      }));
  }

  if (e.target.id === 'testSendMessage') {
    getUser.postData(`${threadURL}messages`, [AccessTOKEN, ContTYPE], [sessionStorage.getItem('token'), AppJSON],
        ` "thread": {
          "_id": "5e1a1c818ec2f49ab3e59ab2"
        },
        "message": {
          "body": "How are you?"
        }`
      );
  }
});
