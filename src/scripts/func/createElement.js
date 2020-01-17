'use strict';

export function createElement (out, name, attr, text, style) {
  let parent = document.getElementsByTagName('BODY')[0];
  let element = document.createElement(name);

  if (out) {
    for (let key in out) {
      let elemKey = out[key];
      if (key === 'tag') {
        parent = document.getElementsByTagName(elemKey);
      } else if (key === 'id') {
        parent = document.getElementById(elemKey);
      } else if (key === 'class'){
        parent = document.getElementsByClassName(elemKey);
      }
    }
  }

  if (attr) {
    for (let key in attr) {
      if (key === 'class') {
        element.className = attr[key];
      } else if (key === 'id') {
        element.id = attr[key];
      } else {
        element.setAttribute(key, attr[key]);
      }
    }
  }

  if (style) {
    for (let key in style) {
      element.style[key] = style[key];
    }
  }

  if (text) {
    if (text.substr(0, 1) === '<' && text.substr(-1, 1) === '>') {
      element.innerHTML = text;
    } else {
      element.appendChild(document.createTextNode(text));
      console.log('var2');
    }
  }

  parent.appendChild(element);
}

function idGenerator() {
  return `f${(~~(Math.random()*1e4)).toString(20)}`;
}


export class CreateElement {
  constructor(params) {
    this.params = params;
  }

  addDiv(out, id, cssClass, text, style) {
    createElement({id: out}, 'div', {id: id, class: cssClass}, text, style);
  }

  addLink(out, id, cssClass, href, title, ariaLabel, text, style) {
    createElement({id: out}, 'a', {id: id, class: cssClass, href: href, title: title, 'aria-label': ariaLabel}, text, style);
  }

  addImage(out, id, cssClass, src, alt) {
    createElement({id: out}, 'img', {id: id, class: cssClass, src: src, alt: alt});
  }

  addInput(
    out, id,
    inputName, type, value, placeholder,
    cssClassInput, cssClassLable,
    lableText, inputStyle, lableStyle){
    createElement({id: out}, 'label', {for: id, type: type, class: cssClassLable}, lableText, lableStyle);
    createElement({id: out}, 'input', {id: id, type: type, class: cssClassInput, placeholder: placeholder, value: value},'',inputStyle)
  }

  addNewElement(out, name, attr, text, style){
    createElement(out, name, attr, text, style);
  }
}
