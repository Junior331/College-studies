// PRODUTOS

const products = {
  Temporada1Box1: {
    name: "Naruto Shippuden T01 Box 01",
    image: "../assets/img/NarShipB1T01A300.jpg",
    price: 60.0,
  },
  Temporada1Box2: {
    name: "Naruto Shippuden T01 Box 02",
    image: "../assets/img/NarShipB1T01A300.jpg",
    price: 60.0,
  },
  Volumes1_4: {
    name: "Attack on Titan -Vol 1-4",
    image: "../assets/img/AOT1-4A300.jpg",
    price: 130.0,
  },
  Volumes5_8: {
    name: "Attack on Titan -Vol 5-8",
    image: "../assets/img/AOT1-4A300.jpg",
    price: 130.0,
  },
  BoxParte1_Vol1_27_inglês: {
    name: "Naruto Box P01 Vol 1-27",
    image: "../assets/img/NarutoBoxPart1A300.jpg",
    price: 600.0,
  },
  RyoukemPVC: {
    name: "Ryuk -Death Note _PVC",
    image: "../assets/img/RyukFigA300.jpg",
    price: 250.0,
  },
  NarutoShippudenPVC: {
    name: "Naruto Shippuden -PVC",
    price: 210.0,
  },
  DeathNoteDVDCompleto: {
    name: "Death Note -DVD- Completo",
    price: 85.0,
  },
  NarutoGold55Volumes: {
    name: "Naruto Gold -55 Vol",
    price: 1000.0,
  },
};

function changeProduct(productName) {
  const product = products[productName];

  const imgElement = document.getElementById("image_product");
  imgElement.src = product.image;

  const priceElement = document.getElementById("price_product");
  priceElement.textContent = "Preço: R$ " + product.price;
}

// CPF VALIDAÇÃO

var campoCpf = document.getElementById("cpf");
const enviarBtn = document.querySelector("#enviarBtn");

enviarBtn.addEventListener("click", function () {
  validar();
  somenteNumeros();
});

function validar() {
  if (campoCpf.value.lenght < 11 || campoCpf.value.lenght === 14) {
    alert("CPF tem de ter 11 dígitos");
    campoCpf.focus();
  }
}

function somenteNumeros() {
  if (campoCpf.value.includes(".") || campoCpf.value.includes("-")) {
    alert("CPF só poder ter dígitos, caracter inválido!");
  }
}

// Adicionar Produtos
const addProdutoBtn = document.querySelector("#addProduto");
const produtoSelecionadoElement = document.querySelector("#produtoSelecionado");
const lista = document.querySelector("#sub-total");

const valorTotal = document.querySelector("#valor-total");

var itemsCarrinho = [];

addProdutoBtn.addEventListener("click", function () {
  console.log(produtoSelecionadoElement.value);
  if (!produtoSelecionadoElement.value) {
    alert("Nenhum produto selecionado");
  } else {
    const produtoSelecionado = products[produtoSelecionadoElement.value];
    itemsCarrinho.push(produtoSelecionado);

    lista.textContent = itemsCarrinho.map((item) => item.name).join(", ");

    let precoTotal = 0;
    itemsCarrinho
      .map((item) => item.price)
      .forEach((price) => (precoTotal = precoTotal + price));

    valorTotal.textContent = precoTotal;
  }
});
