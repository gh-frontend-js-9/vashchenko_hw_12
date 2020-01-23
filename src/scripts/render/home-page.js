import {CreateElement} from "../func/createElement";

let createElement = new CreateElement();

export function homePageContent () {
  createElement.delete({id: 'content'});
  createElement.addNewElement({id: 'content'},'div',{'class': 'content-menu d-flex flex-column col-md-12 p-0'},
    `<div class="d-flex flex-row justify-content-center align-items-center align-content-center">
      <div id="">
        <img class="d-block m-auto pt-4 w-75" src="images/35-layers.png">
      </div>
      <div>
        <img class="w-75" src="images/48-layers.png">
      </div>
    </div>
      <div class="d-flex flex-row justify-content-around align-items-center">
        <div class=" d-flex align-items-center justify-content-center">
          <img class="w-50" src="images/42-layers.png">
          <img class="w-25" src="images/28-layers.png">
        </div>
        <div>
          <img class="w-75" src="images/17-layers.png">
        </div>
      </div>
    </div>`
  );
}
