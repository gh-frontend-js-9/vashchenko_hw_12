import {CreateElement} from "../func/createElement";

let createElement = new CreateElement();

export function threadPageContent() {

  createElement.delete({id: 'content'});

  createElement.addNewElement({id: 'content'}, 'div', {'class': 'content-menu d-flex flex-column col-md-12 p-0'},
    `<div class="menu-params d-flex flex-row justify-content-between pl-4 pr-4 pt-2 pb-2">
      <div id="actionMessageBtn" class="header__btn"></div>
      <div class="d-flex justify-content-center align-items-center">
        <form class="menu-params__filter d-flex flex-row align-items-center">
          <label for="filterMessage" class="text-white w-75">Filter messages: </label>
          <select id="filterMessage" name="filterMessage" class="form-control">
            <option value="date">Date</option>
            <option value="fav">Favorite</option>
            <option value="random">I'm Feeling Lucky</option>
          </select>
        </form>
      </div>
    </div>`
  );

  createElement.addNewElement(
    {id: "actionMessageBtn"},
    'a',
    {id:'inboxBtn', 'class':'control-btn--dark', href: '#', title:'Inbox message', 'aria-label': 'All inbox message'},
    `<span class="ti-import pr-2"></span> Inbox <span id="countMessage"></span>`
  );
  createElement.addNewElement(
    {id: "actionMessageBtn"},
    'a',
    {id:'sentBtn', 'class':'control-btn--dark', href: '#', title:'Sent message', 'aria-label': 'All sent message'},
    `<span class="ti-export pr-2"></span> Sent <i></i>`
  );
  createElement.addNewElement(
    {id: "actionMessageBtn"},
    'a',
    {id:'trashBtn', 'class':'control-btn--dark', href: '#', title:'Delete message', 'aria-label': 'Delete message'},
    `<span class="ti-trash pr-2"></span> Trash <i></i>`
  );

  createElement.addNewElement(
    {id:'content'},
    'div',
    {id:'threadContent', 'class': 'message d-flex flex-row p-0 w-100'},
    `<div class="message__conversation d-flex flex-column justify-content-between align-items-center h-100 w-25">
      <ul id="listConversation" class="message__conversation-list m-0 w-100">
        <noscript>
          <h2 class="text-warning text-center">THIS ELEMENT DON'T WORK WITHOUT JAVASCRIPT</h2>
        </noscript>
      </ul>
      <div id="startConversation" class="h-25 text-center w-100 pt-4 pb-1 border-top border-dark">
        <a id="newConversation" class=" btn btn-primary pl-5 pr-5" href="#" title="Create new conversation" aria-label="Create new conversation">
          <span class="ti-plus"></span> New conversation
        </a>
      </div>`
    );

  createElement.addNewElement({id:'threadContent'},
    'div',
    {'class':'message__thread w-50'},
    `<div id="threadList" class="message__thread-list"></div>
      <noscript>
        <h2 class="text-warning text-center">THIS ELEMENT DON'T WORK WITHOUT JAVASCRIPT</h2>
      </noscript>
    </div>
    <form class="w-100" action="" method="post">
      <label for="messageText" hidden>Write message</label>
      <textarea id="messageText" class="message__thread-input" type="text" name="messageText" placeholder="Write a message"></textarea>
    </form>`
  );

  createElement.addNewElement({id:'threadContent'},
    'div',
    {id:'userProfile', 'class':'message__user w-25'},
    `<noscript>
      <h2 class="text-warning text-center">THIS ELEMENT DON'T WORK WITHOUT JAVASCRIPT</h2>
    </noscript>`
  );
}

export function allUsers(data) {

  createElement.delete({id: 'threadList'});
  createElement.delete({id: 'userProfile'});

  createElement.addNewElement({id: 'threadList'}, 'div', {id: 'usersList'});

  for (let i = 0; data.length >i; i++){
    let userData = data[i];
    let separateClass = '';
    if (i%2 === 0) {
      separateClass = 'conversation__separate'
    }

    createElement.addNewElement(
      {id: 'usersList'},
      'div',
      {id: `${userData['_id']}`, 'class': `conversation__allusers ${separateClass}`},
      `<ul>
           <li class="text-white">${userData['name']}</li>
           <li class="text-white">${userData['position']}</li>
           <li class="text-white">${userData['organization']}</li>
         </ul>
         <ul class="d-flex justify-content-around flex-column">
           <li>
             <a title="Send mail to ${userData['email']}" 
                href="mailto:${userData['email']}" 
                target="_blank">
                  ${userData['email']}
             </a>
           </li>
           <li>
             <a title="Call to ${userData['phone']}" 
                href="tel:${userData['phone']}">
                  ${userData['phone']}
             </a>
           </li>
           <li>
             <a title="View address on map ${userData['address']}" 
                href="https://maps.google.com/maps?q=${userData['address'].split(' ').join('%')}"
                target="_blank">
                  ${userData['address']}
             </a>
           </li>
         </ul>`
    );
  }
}


export function threadUser(data) {
  createElement.delete({id: 'listConversation'});
  createElement.delete({id: 'userProfile'});

  for (let i = 0; data.length >i; i++){
    let threadData = data[i];
    let threadMessage = '';
    if (threadData['message'] !== null) {
      threadMessage = threadData['message']['body'];
    }

    let userName = threadData['users'][0];
    if (threadData['users'][0]['_id'] === localStorage.getItem('myId')){
      userName = threadData['users'][1];
    }

    createElement.addNewElement(
      {id: 'listConversation'},
      'li',
      {id: threadData['_id'], 'data-user-id':`${userName['_id']}`, 'class': 'message__conversation-user border-bottom border-dark p-3'},
      `<div class="d-flex flex-row justify-content-between">
        <p class="text-white">${userName['name']}</p>
        <p class="text-primary">${new Date(threadData['updated_at'])}</p>
       </div>
       <p class="text-light">${threadMessage}</p>`
    );
  }
}


export function threadMessages(data) {
  createElement.delete({id: 'threadList'});

  for (let i = 0; data.length > i; i++) {
    if (data[i]['user']['_id'] === localStorage.getItem('myId')) {
      outMessage(data[i]);
    } else {
      incomingMessage(data[i]);
    }
  }
}


function incomingMessage(data) {
  let userName = data['user']['name'];
  let messageText = data['body'];
  let createdDate = data['created_at'];

  createElement.addNewElement(
    {id: 'threadList'},
    'div',
    {id: 'incomingMessageId', 'class': 'message__thread-incoming d-flex align-items-center flex-row w-100'},
    `<div>
      <img src="images/photo.png" title="SET URL ON USER PHOTO IN RESPONSE" alt="User name" aria-label="User name photo">
      <p class="text-center text-white">${userName}</p>
    </div>
    <div class="ml-3">
      <p class="mr-auto message__thread-incoming--text text-white w-75 p-3 text-left">
      ${messageText}
      </p>
      <p class="text-secondary">${createdDate}</p>
    </div>`
  )
}


function outMessage(data) {
  let myName = localStorage.getItem('myName');
    if (myName === '') {
      myName = data['user']['name'];
    }

  let messageText = data['body'];
  let createdDate = data['created_at'];

  createElement.addNewElement(
    {id: 'threadList'},
    'div',
    {id: 'outgoingMessageId', 'class': 'message__thread-outgoing d-flex align-items-center flex-row-reverse w-100'},
    `<div>
      <img src="images/photo.png" 
           title="${myName}" 
           alt="${myName} profile photo" 
           aria-label="User name photo">
           <p class="text-center text-white">${myName}</p>
    </div>
    <div class="ml-3">
      <p class="ml-auto mr-3 message__thread-outgoing--text text-white w-75 p-3 text-right">
       ${messageText}
      </p>
      <p class="text-secondary text-right">${createdDate}</p>
    </div>`
  )
}

export function userProfile (data) {

  let userName = data['name'];
  let userId = data['_id'];
  let position = data['position'];
  let description = data['description'];
  let phone = data['phone'];
  let email = data['email'];
  let address = data['address'];
  let organization = data['organization'];

  createElement.delete({id: 'userProfile'});

  createElement.addNewElement({id: 'userProfile'},
    'div',
    {id: userId, 'class': 'message__user--card d-flex flex-column text-center align-items-center'},
    `<img class="message__user--photo" src="images/photo.png" alt="${userName} user photo">
      <h2 class="message__user--name">${userName}</h2>
      <h3 class="message__user--position" id="position">${position}</h3>
      <p class="message__user--description">${description}</p>
      <div id="userInfoBlock"></div>`
    );

  if (email !== '') {
    createElement.addNewElement(
      {id:'userInfoBlock'},
      'h3',
      {'class':'message__user--data'},
      'Email'
    );
    createElement.addLink(
      'userInfoBlock',
      'userEmail',
      'message__user--link',
      `mailto:${email}`,
      'email',
      `${userName} email`,
      email,
      '',
      '_blank'
    );
  }

  if (phone !== '') {
    createElement.addNewElement(
      {id:'userInfoBlock'},
      'h3',
      {'class':'message__user--data'},
      'Phone'
    );
    createElement.addLink(
      'userInfoBlock',
      'userPhone',
      'message__user--link',
      `tel:${phone}`,
      'phone',
      `${userName} phone number`,
      phone,
      '',
      '_blank'
    );
  }

  if (address !== '') {
    createElement.addNewElement(
      {id:'userInfoBlock'},
      'h3',
      {'class':'message__user--data'},
      'Address'
    );
    createElement.addLink(
      'userInfoBlock',
      'userAddress',
      'message__user--link',
      `https://maps.google.com/maps?q=${address.split(' ').join('%')}`,
      'address',
      `${userName} current address`,
      address,
      '',
      '_blank'
    );
  }

  if (organization !== '') {
    createElement.addNewElement(
      {id:'userInfoBlock'},
      'h3',
      {'class':'message__user--data'},
      'Organization');
    createElement.addLink(
      'userInfoBlock',
      'userOrganization',
      'message__user--link',
      `http://geekhub.ck.ua/`,
      'organization',
      `${userName} current organization`,
      organization,
      '',
      '_blank'
      )
  }
}
