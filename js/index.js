const products = {
  Temporada1Box1: {
    image:
      "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
  Temporada1Box2: {
    image: "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
  Volumes1_4: {
    image:
      "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
  Volumes5_8: {
    image:
      "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
  BoxParte1_Vol1_27_inglês: {
    image: "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
  RyoukemPVC: {
    image:
      "../assets/img/AOT1-4A300.jpg",
    price: "130,00",
  },
};

function changeProduct(productName) {
  const product = products[productName];
  var imgElement = document.getElementById("image_product");
  imgElement.src = product.image;
}
