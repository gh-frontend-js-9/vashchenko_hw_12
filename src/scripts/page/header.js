import '../../assets/images/logo.png';
import '../../assets/images/search.png';
import '../../assets/images/ring.png';
import '../../assets/images/photo.png';
import {CreateElement} from "../func/createElement";

export function header() {
  let elem = new CreateElement();
  let logoHeader = new CreateElement();
  let headerBtn = new CreateElement();
  let headerSysBtn = new CreateElement();
  let headerMyAccount = new CreateElement();

  elem.addNewElement({id: 'header'}, 'hr', {id: 'testDelete', 'class': "Delete"},'',{border: '4px solid red'});
  elem.addNewElement({id: 'header'}, 'p', '','Delete this element. it is only demonstrate element for learning',{border: '2px solid red', 'text-align': 'center', padding: '20px', margin: '10px'});

  logoHeader.addDiv('header', 'headerLogo', 'logo');

  logoHeader.addLink('headerLogo', 'headerLogoLink', 'logo__link', '/','Go to main page', 'Link to main page');
  logoHeader.addImage('headerLogoLink', 'logoImg', 'logo__img', 'images/logo.png', 'Our app title - Virtus');
  headerBtn.addInput('header', 'addBtnHeader', 'addBtnHeade', 'button', '+Add', 'text in placeholder', 'inputClass', 'lableClass', 'Lable title text', '', {display: 'none'});

  headerSysBtn.addImage('header', 'searchImg', 'search__img', 'images/search.png', 'Search');
  headerSysBtn.addImage('header', 'ringImg', 'ring__img', 'images/ring.png', 'bells notification');

  headerMyAccount.addImage('header', 'photoImg', 'photo__img', 'images/photo.png', 'Avatar img');

  hr.addNewElement({id: 'header'}, 'hr', {id: 'testDelete', 'class': "Delete"},'',{border: '4px solid red'});

}
