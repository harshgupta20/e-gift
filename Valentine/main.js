// Logo effect

var div = document.querySelector("#logo");

var theText = "C&K";
for (let i = 0; i < theText.length; i++) {
  var delay = (i * 2) / theText.length;

  var z = document.createElement("span");
  z.innerText = theText[i];
  div.append(z);
  z.style.animationDelay = delay + "s";
}

// heading effect

var content = document.querySelector(".content-heading");
var content_sub = document.querySelector(".content-subheading");

var text = "Valentine's";

for (let i = 0; i < text.length; i++) {
  var z = document.createElement("span");
  z.classList.add("rubber");
  z.innerText = text[i];
  content.append(z);
}

var text1 = "Gift";

for (let i = 0; i < text1.length; i++) {
  var zz = document.createElement("span");
  zz.classList.add("rubber");
  zz.innerText = text1[i];
  content_sub.append(zz);
}

//rubber band effect

var rubber = document.querySelectorAll(".rubber");

rubber.forEach((item) =>
  item.addEventListener("mouseover", () => {
    item.classList.add("rubber-band");
    item.addEventListener("animationend", () => {
      item.classList.remove("rubber-band");
    });
  })
);
