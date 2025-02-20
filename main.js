//  rubber band effect
var rubber = document.querySelectorAll(".rubber");

rubber.forEach((item) =>
  item.addEventListener("mouseover", () => {
    item.classList.add("rubber-band");
    item.addEventListener("animationend", () => {
      item.classList.remove("rubber-band");
    });
  })
);

// logo effect

var div = document.querySelector("#logo");

var theText = "C&K";
for (let i = 0; i < theText.length; i++) {
  var delay = (i * 2) / theText.length;

  var z = document.createElement("span");
  z.innerText = theText[i];
  div.append(z);
  z.style.animationDelay = delay + "s";
}

// generating cards

var cards = document.querySelector(".categories-cards");

for (let i = 0; i < 8; i++) {
  var card_item = document.createElement("div");
  card_item.classList.add("items");
  cards.appendChild(card_item);
}

// assigning pictures

var card_items = document.querySelectorAll(".items");

card_items.forEach((item) => {
  item.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524_960_720.jpg")`;
});

// burger

var burger = document.querySelector(".burger");
var social = document.querySelector(".social-links");
var burgerItems = document.querySelector(".burger-items");

var isopen = Boolean(true);

burger.addEventListener("click", () => {
  if (isopen) {
    burgerItems.style.transform = "translateX(0)";
    isopen = false;
    social.style.opacity = 0;
    
  }
  else { 
    burgerItems.style.transform = "translateX(100%)";
    isopen = true;
    social.style.opacity = 1;

  }
});
