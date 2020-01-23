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
    `<span class="ti-import pr-2"></span> Sent <i></i>`
  );
  createElement.addNewElement(
    {id: "actionMessageBtn"},
    'a',
    {id:'trashBtn', 'class':'control-btn--dark', href: '#', title:'Delete message', 'aria-label': 'Delete message'},
    `<span class="ti-import pr-2"></span> Trash <i></i>`
  );

  createElement.addNewElement(
    {id:'content'},
    'div',
    {id:'threadContent', 'class': 'message d-flex flex-row p-0 w-100'},
    `<div class="message__conversation d-flex flex-column justify-content-between align-items-center h-100 w-25">
      <ul id="listConversation" class="message__conversation-list m-0">
        <noscript>
          <h2 class="text-warning text-center">THIS ELEMENT DON'T WORK WITHOUT JAVASCRIPT</h2>
        </noscript>
      </ul>
      <div id="startConversation" class="h-25 text-center w-100 pt-4 pb-1 border-top border-dark">
        <a id="newConversation" class=" btn btn-primary pl-5 pr-5" href="#" title="Create new conversation" aria-label="Create new conversation">
          <span class="ti-plus"></span> New conversation (Get all user)
        </a>
      </div>`
    );

  createElement.addNewElement({id:'threadContent'},
    'div',
    {'class':'message__thread w-50'},
    `<div id="threadList" class="message__thread-list">
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
