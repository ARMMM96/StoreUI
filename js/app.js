const loginButton = document.querySelector(".login");
const cartButton = document.querySelector(".cart");
const addTocartButton = document.querySelectorAll(".addToCart");
const submitLoginButton = document.querySelector(".submitLogin");
const loginForm = document.querySelector(".login-form");
const userNameValue = document.querySelector(".user-name");
const passwordValue = document.querySelector(".password");
const proudctList = document.querySelector(".list");
const removeButton = document.querySelectorAll(".remove-item");
const orderbutton = document.querySelector(".order");

let loggedIn = false;

// Event listeners
loginButton.addEventListener("click", loginFunction);
cartButton.addEventListener("click", cartList);
submitLoginButton.addEventListener("click", submitLogin);
removeButton.forEach(button => {
  button.addEventListener("click", removeItem);
});
addTocartButton.forEach(button => {
  button.addEventListener("click", addToCart);
});

function loginFunction() {
  // Toggle login form
  toggleLoginForm();
  if (!loggedIn) {
    //   check if any other list open
    if (proudctList.classList.contains("open")) {
      toggleCartListItems();
    }
  } else if (loggedIn) {
    loggedIn = false;
    loginButton.innerHTML = `Login To Order`;
  }
}

function addToCart() {
  const li = document.createElement("li");
  li.className = "item";
  li.addEventListener("click", removeItem);
  li.innerHTML = `
                <img src="https://cdn.shopify.com/s/files/1/1944/0163/products/skin-care-system-system-level-1-pos-1.png?v=1571851004"
                    alt="Itme image">
                <span>Item name</span>
                <span class="remove-item"><i class="fas fa-trash"></i></span>
`;
  proudctList.insertBefore(li, orderbutton);
}

function cartList() {
  // Toggle the products list
  toggleCartListItems();
  //   check if any other list open
  if (loginForm.classList.contains("open")) {
    toggleLoginForm();
  }
}

function toggleCartListItems() {
  proudctList.classList.toggle("open");
  cartButton.classList.toggle("clicked");
}

function toggleLoginForm() {
  loginButton.classList.toggle("clicked");
  loginForm.classList.toggle("open");
}

function submitLogin(e) {
  e.preventDefault();

  if (userNameValue.value == "admin" && passwordValue.value == "admin") {
    loginForm.classList.toggle("open");
    loginButton.innerHTML = `Hello ${userNameValue.value}`;
    userNameValue.value = "";
    passwordValue.value = "";
    loggedIn = true;
  }
}

function removeItem(e) {
  if (e.target.parentElement.parentElement.classList.contains("item")) {
    e.target.parentElement.parentElement.remove();
  }
}
