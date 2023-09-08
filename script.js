let typed = new Typed(".multiple-text", {
  strings: ["Fullstack Developer"],
  typeSpeed: 100,
  BackSpeed: 100,
  BackDelay: 1000,
  loop: true,
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
