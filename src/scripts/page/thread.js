import {RequestToServer} from "../request/requests";
import {AccessTOKEN, AppJSON, ContTYPE, threadURL, usersURL} from "../variable/variables";
import {CreateElement} from "../func/createElement";

let getUser = new RequestToServer();
// GET DATA
document.addEventListener('click', function(e) {
  if (e.target.id === 'newConversation') {
    getUser.getData(`${usersURL}all`, AccessTOKEN, sessionStorage.getItem('token'));
    renderConversation();
    takeMessage();
    outMessage();
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
let createElement = new CreateElement();

function renderConversation () {
  createElement.addNewElement(
    {id: 'listConversation'},
    'li',
    {id: `(Set_user_id)`, 'class': 'message__conversation-user border-bottom border-dark p-3'},
    `<div class="d-flex flex-row justify-content-between">
        <p class="text-white" title="SET NAME FOR RESPONSE DATA">Michelle Stewart</p>
        <p class="text-primary" title="SET DATE FOR RESPONSE DATA">Today, 5:32 PM</p>
      </div>
      <p class="text-light" title="SET SHORT DESCRIPTION FOR RESPONSE DATA">Duis aute irure dolor in reprehenderit in voluptate sectetur, numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>`
  );
}

function takeMessage() {
  createElement.addNewElement(
    {id: 'threadList'},
    'div',
    {id: 'incomingMessageId', 'class': 'message__thread-incoming d-flex align-items-center flex-row w-100'},
    `<div>
      <img src="images/photo.png" title="SET URL ON USER PHOTO IN RESPONSE" alt="User name" aria-label="User name photo">
    </div>
    <div class="ml-3">
      <p class="mr-auto message__thread-incoming--text text-white w-75 p-3 text-left">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ulla pariatur. est laborum. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae.
      </p>
      <p class="text-secondary">(Date in response) 4 April 2016, 5:32 PM</p>
    </div>`
  )
}


function outMessage() {
  createElement.addNewElement(
    {id: 'threadList'},
    'div',
    {id: 'outgoingMessageId', 'class': 'message__thread-outgoing d-flex align-items-center flex-row-reverse w-100'},
    `<div>
      <img src="images/photo.png" title="SET URL ON USER PHOTO IN RESPONSE" alt="User name" aria-label="User name photo">
    </div>
    <div class="ml-3">
      <p class="ml-auto message__thread-outgoing--text text-white w-75 p-3 text-right">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ulla pariatur. est laborum. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae.
      </p>
      <p class="text-secondary text-right">(Date in response) 4 April 2016, 5:32 PM</p>
    </div>`
  )
}

function getUserProfile () {
  createElement.addNewElement(
    {id: 'userProfile'},

  )
}
