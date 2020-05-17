const products = {
  Temporada1Box1: {
    image: "../assets/img/NarShipB1T01A300.jpg",
    price: "60,00",
  },
  Temporada1Box2: {
    image: "../assets/img/NarShipB1T01A300.jpg",
    price: "60,00",
  },
  Volumes1_4: {
    image: "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
  Volumes5_8: {
    image: "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
  BoxParte1_Vol1_27_inglês: {
    image: "../assets/img/NarutoBoxPart1A300.jpg",
    price: "600,00",
  },
  RyoukemPVC: {
    image: "../assets/img/RyukFigA300.jpg",
    price: "250,00",
  },
};

function changeProduct(productName) {
  const product = products[productName];

  const imgElement = document.getElementById("image_product");
  imgElement.src = product.image;

  const priceElement = document.getElementById("price_product");
  priceElement.textContent = "Preço: R$ " + product.price;
}
