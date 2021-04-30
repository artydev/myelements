import { define } from "wicked-elements";
import "./styleit.css"


const content = (elt) => `
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" name="closeNav">&times;</a>
    ${elt.links.map((l) => `<a name="closeNav" href=${l.target}>${l.label}</a>`)}
  </div>
  <span style="font-size:30px;cursor:pointer" name="openNav">&#9776;</span>
`;


window.closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

const sideBarConfig = {
  init() {
    this.allLinks = Array.from(this.element.querySelectorAll("my-link"));
    this.links = this.allLinks.map((l) => ({
      label: l.getAttribute("label"),
      target: l.getAttribute("target"),
    }));
  },
  connected() {
    this.element.innerHTML = `${content(this)}`;
    document
      .querySelector("[name='openNav']")
      .addEventListener("click", this.openNavBar);
    document
      .querySelector("[name='closeNav']")
      .addEventListener("click", this.closeNavBar);      
  },
  openNavBar() {
   
    document.getElementById("mySidenav").style.width = "250px";
  },
  closeNavBar() {
    console.log("closing...")
    document.getElementById("mySidenav").style.width = "0";
  }
};

define("my-sidebar", sideBarConfig);

define("my-link", {
  connected() {},
});
