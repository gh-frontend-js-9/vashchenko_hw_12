import {CreateElement} from "../func/createElement";

let createElement = new CreateElement();

export function threadHtmlPage() {
  createElement.delete({id: 'content'});
  createElement.addNewElement(
    {id: 'content'},
    'div',
    {'class': 'content-menu d-flex flex-column col-md-12 p-0'},
    `<div class="menu-params d-flex flex-row justify-content-between pl-4 pr-4 pt-2 pb-2">
        <div class="header__btn">
          <a class="control-btn" href="#" title="Inbox message" aria-label="All inbox message">
            <span class="ti-import pr-2"></span> Inbox (<span id="countMessage">2</span>)
          </a>
          <a class="control-btn--dark" href="#" title="Sent message" aria-label="All sent message">
            <span class="ti-export pr-2"></span> Sent
          </a>
          <a class="control-btn--dark" href="#" title="Sent message" aria-label="All sent message">
            <span class="ti-trash pr-2"></span> Trash
          </a>
        </div>
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
      </div>
      <div class="d-flex flex-row justify-content-around align-items-center"></div>`);

  createElement.addNewElement(
    {id: 'content'},
    'div',
    {'class': 'message d-flex flex-row p-0 w-100'},
    `<div class="message__conversation d-flex flex-column justify-content-between align-items-center h-100 w-25">
      <ul id="listConversation" class="message__conversation-list smooth-scroll m-0">
        <li class="message__conversation-user border-bottom border-dark p-3" data-item="user_id">
          <div class="d-flex flex-row justify-content-between">
            <p class="text-white">Michelle Stewart</p>
            <p class="text-primary">Today, 5:32 PM</p>
          </div>
          <p class="text-light">Duis aute irure dolor in reprehenderit in voluptate sectetur, numquam eius modi tempora 
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </li>
        <li class="message__conversation-user--active border-bottom border-dark p-3" data-item="user_id">
          <div class="d-flex flex-row justify-content-between">
            <p class="text-white">Michelle Stewart</p>
            <p class="text-primary">Today, 5:32 PM</p>
          </div>
          <p class="text-light">Duis aute irure dolor in reprehenderit in voluptate sectetur, numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </li>
      </ul>
      <div class="h-25 text-center w-100 pt-4 pb-1 border-top border-dark">
        <a class=" btn btn-primary pl-5 pr-5" href="#" title="Create new conversation" aria-label="Create new conversation">
          <span class="ti-plus"></span> New conversation
        </a>
      </div>
    </div>
    <div class="message__thread w-50">
      <div id="threadList" class="message__thread-list">
        <div class="message__thread-incoming d-flex align-items-center flex-row w-100">
          <div>
            <img src="images/photo.png">
          </div>
        <div class="ml-3">
          <p class="mr-auto message__thread-incoming--text text-white w-75 p-3 text-left">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur. 
          est laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae.
          </p>
          <p class="text-secondary">4 April 2016, 5:32 PM</p>
        </div>
      </div>
      <div class="message__thread-outgoing d-flex align-items-center flex-row-reverse w-100">
        <div>
          <img src="images/photo.png">
        </div>
        <div class="mr-3">
          <p class="ml-auto message__thread-outgoing--text text-white w-75 p-3 text-right">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ulla pariatur. est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae.
          </p>
          <p class="text-secondary text-right">4 April 2016, 5:32 PM</p>
        </div>
      </div>
    </div>
    <form class="w-100" action="" method="post">
      <label for="messageText" hidden>Write message</label>
      <textarea id="messageText" class="message__thread-input" type="text" name="messageText" placeholder="Write a message"></textarea>
    </form>
  </div>
    
  <div id="userProfile" class="message__user w-25">
    <div class="message__user--card d-flex flex-column text-center align-items-center">
      <img class="message__user--photo" src="images/photo.png" alt="user photo">
      <h2 class="message__user--name">Lyall Roach</h2>
      <h3 class="message__user--position" id="position">UI/UX Designer</h3>
      <p class="message__user--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
      <h3 class="message__user--data">Email</h3>
      <a id="userEmail" class="message__user--link" href="#" aria-label="'User name' email" title="email">
        some@email.com
      </a>
      <h3 class="message__user--data">Phone</h3>
      <a id="userPhone" class="message__user--link" href="#" aria-label="'User name' phone" title="phone">
        +38 (099) 888 77 66
      </a>
      <h3 class="message__user--data">Address</h3>
      <a id="userAddress" class="message__user--link" href="https://goo.gl/maps/Fe3SMUbBfVhKqyRV8" target="_blank" aria-label="'User name' address" title="address">
        Address go to google map
      </a>
      <h3 class="message__user--data">Organization</h3>
      <a id="userOrganization" class="message__user--link" href="#" aria-label="'User name' organization" title="organization">
        organization.web.site
      </a>
    </div>
  </div>
</div>`);
}
