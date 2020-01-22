import {RequestToServer} from "../request/requests";
import {AccessTOKEN, AppJSON, ContTYPE, threadURL, usersURL} from "../variable/variables";

let getUser = new RequestToServer();
// GET DATA
document.addEventListener('click', function(e) {
  if (e.target.id === 'newConversation') {
    getUser.getData(`${usersURL}all`, AccessTOKEN, sessionStorage.getItem('token'));
  }
  if (e.target.id === 'testCurrentUser') {
    getUser.getData(usersURL, AccessTOKEN, sessionStorage.getItem('token'));
  }
  if (e.target.id === 'testUserById') {
    //Error how take data on this.user?
    getUser.getData(`${usersURL}${this.user.id}`, AccessTOKEN, sessionStorage.getItem('token'));
  }
  if (e.target.id === 'testAllThread') {
    getUser.getData(threadURL, AccessTOKEN, sessionStorage.getItem('token'));
  }
  if (e.target.id === 'testAllMessage') {
    // HOW SAVE AND TAKE THREAD DATE
    getUser.getData(`${threadURL}${this.threadId}`, AccessTOKEN, sessionStorage.getItem('token'));
  }
  if (e.target.id === 'testCreateThread') {
    // HOW SEND 2 headers myHeaders
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


// Render elements
