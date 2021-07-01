const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const cartBtn = document.querySelector(".cart-page");
const body = document.querySelector("body");

menuBtn.onclick = function () {
  menu.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disable-scroll");
};

cancelBtn.onclick = function () {
  menu.classList.remove("show");
  menuBtn.classList.remove("hide");
  body.classList.remove("disable-scroll");
};

cartBtn.onclick = function () {
  menu.classList.remove("show");
  menuBtn.classList.remove("hide");
  body.classList.remove("disable-scroll");
};

const nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (scrollY > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const to1 = document.querySelector("#to1");
const to2 = document.querySelector("#to2");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");

function toPage2() {
  page1.classList.add("hidden-page");
  page2.classList.remove("hidden-page");
  to1.classList.remove("active");
  to2.classList.add("active");
  window.scrollTo(0, 0);
}

function toPage1() {
  page1.classList.remove("hidden-page");
  page2.classList.add("hidden-page");
  to1.classList.add("active");
  to2.classList.remove("active");
  window.scrollTo(0, 0);
}

function validate() {
  var error_msg = document.getElementById("error_msg");
  var text;
  error_msg.style.padding = "10px";

  var name = f1.txtName.value;
  if (name == "" || name.length < 3) {
    text = "Please enter valid name";
    f1.txtName.focus();
    error_msg.innerHTML = text;
    return false;
  }
  var email = f1.txtEmail.value;
  if (email == "") {
    text = "Email is required";
    f1.txtEmail.focus();
    error_msg.innerHTML = text;
    return false;
  }
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 3) {
    text = "Please enter valid email";
    f1.txtEmail.focus();
    error_msg.innerHTML = text;
    return false;
  }
  var phone = f1.txtPhone.value;
  if (phone == "" || isNaN(phone) || phone.length != 10) {
    text = "Enter valid phone number";
    f1.txtPhone.focus();
    error_msg.innerHTML = text;
    return false;
  }
  var msg = f1.txtMsg.value;
  if (msg == "") {
    text = "Message box cannot be left empty";
    f1.txtMsg.focus();
    error_msg.innerHTML = text;
    return false;
  }
  return true;
}

function cart() {
  alert("You will be redirected to product page \n Add to cart from there");
}
