const alaskaButton = document.getElementById("alaska");
alaskaButton.addEventListener("click", () => {
  document.getElementById("alaska1").src = "a1.jpg";
  document.getElementById("alaska2").src = "a2.jpg";
  document.getElementById("alaska3").src = "a3.jpg";
});
const cancunButton = document.getElementById("cancun");
cancunButton.addEventListener("click", () => {
  const arizona = document.createElement("h2");
  arizona.className = "sectionTitle";
  arizona.innerHTML = `Arizona, USA`;
  document.getElementById("travel").appendChild(arizona);
  const arizonaImage1 = document.createElement("img");
  arizonaImage1.src = "az1.jpg";
  arizonaImage1.className = "image";
  document.getElementById("travel").appendChild(arizonaImage1);
  const arizonaImage2 = document.createElement("img");
  arizonaImage2.src = "az2.jpg";
  arizonaImage2.className = "image";
  document.getElementById("travel").appendChild(arizonaImage2);
  const arizonaImage3 = document.createElement("img");
  arizonaImage3.src = "az3.jpg";
  arizonaImage3.className = "image";
  document.getElementById("travel").appendChild(arizonaImage3);
});

const moreFood = document.getElementById("moreFood");
moreFood.addEventListener("click", () => {
  const newFood = document.createElement("li");
  const aTag = document.createElement("a");
  newFood.className = "foodList";
  aTag.innerHTML = `Wondee Siam`;
  aTag.setAttribute("href", "https://www.wondeesiamnyc.com/");
  aTag.setAttribute("target", "_blank");
  newFood.appendChild(aTag);
  document.getElementById("list").appendChild(newFood);
  const newFoodIntro = document.createElement("p");
  newFoodIntro.className = "text";
  newFoodIntro.innerHTML = `Modestly-priced Thai country-style cuisine is served at this cozy hole-in-the-wall.`;
  document.getElementById("list").appendChild(newFoodIntro);
});
