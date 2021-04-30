import { render, Fragment } from "preact"
import { html } from 'htm/preact';
import { define } from "wicked-elements";
import "./styleit.css"
import b from "bss"

const linkcolor = (color) => b`c:${color}`;

function decode(str) {
  const s = str ;
  let e = document.createElement("span");
  e.innerHTML = s;
  return e.innerText;
}

const SideBar = ({ elt }) => {
  return html`
    <${Fragment}>
      <div id="mySidenav" class="sidenav">
        <a class=${`closebtn ${linkcolor(elt.col)}`} onclick=${elt.closeNav}>${decode("&times;")}</a>
        ${elt.links.map(
          (l) => html`<a name="closeNav" href="${l.target}">${l.label}</a>`
        )}
      </div>
      <span style="font-size:30px;cursor:pointer" onclick=${elt.openNav}
        >${decode("&#9776;")}</span
      >
    </${Fragment}>
  `;
};

const sideBarConfig = {
  init() {
    this.col = this.element.getAttribute("color");
    this.width = this.element.getAttribute("width");
    this.allLinks = Array.from(this.element.querySelectorAll("my-link"));
    this.links = this.allLinks.map((l) => ({
      label: l.getAttribute("label"),
      target: l.getAttribute("target"),
    }));
  },
  connected() {
    render(html`<${SideBar} elt=${this} />`, this.element);
  },
  openNav() {
    mySidenav.style.width = "250px";
  },
  closeNav() {
    mySidenav.style.width = "0px";
  },
};

define("my-sidebar", sideBarConfig);


define("my-link", {
  connected() { },
});
