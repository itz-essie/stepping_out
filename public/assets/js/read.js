let cardTitle = document.getElementsByClassName("card-title");
let categoryImg = document.getElementsByClassName("category-img");

for (var i = 0; i < cardTitle.length; i++) {
  var category = cardTitle[i].getAttribute("category");

  switch (category) {
    case "Food_Drink":
      cardTitle[i].innerHTML = "Category: Food Drink";
      categoryImg[i].setAttribute("src", "/images/food.png");
      break;
    case "Sports":
      cardTitle[i].innerHTML = "Category: Sports";
      categoryImg[i].setAttribute("src", "/images/sports.png");
      break;
    case "Virtual":
      cardTitle[i].innerHTML = "Category: Virtual";
      categoryImg[i].setAttribute("src", "/images/distance.png");
      break;
    case "Entertainment":
      cardTitle[i].innerHTML = "Category: Entertainment";
      categoryImg[i].setAttribute("src", "/images/distance.png");
      break;
    case "Outdoors_Recreation":
      cardTitle[i].innerHTML = "Category: Outdoors & Recreation";
      categoryImg[i].setAttribute("src", "/images/cloud.png");
      break;
  }
  console.log(category);
}
