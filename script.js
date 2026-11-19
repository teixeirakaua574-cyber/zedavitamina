// Edite os nomes dos itens nestas listas para atualizar o cardápio.
const pasteis = [
  { nome: "Pastel de carne", icone: "🥟" },
  { nome: "Pastel de queijo", icone: "🧀" },
  { nome: "Pastel de carne com queijo", icone: "🥟" },
  { nome: "Pastel de frango", icone: "🥟" },
  { nome: "Pastel de frango com catupiry", icone: "🥟" },
  { nome: "Pastel de camarão", icone: "🍤" }
];

const sucos = [
  { nome: "Suco de uva", icone: "🍇" },
  { nome: "Suco de laranja", icone: "🍊" }
];

const refrigerantes = [
  { nome: "Coca-Cola lata 220 ml", icone: "🥤" },
  { nome: "Coca-Cola garrafinha 200 ml", icone: "🥤" },
  { nome: "Coca-Cola garrafa 2 L", icone: "🥤" },
  { nome: "Pepsi lata 350 ml", icone: "🥤" },
  { nome: "Pepsi garrafa 2 L", icone: "🥤" }
];

// Monta os cards sem preços nem descrições não confirmadas.
function criarCards(produtos, elementoId, tipo) {
  const lista = document.getElementById(elementoId);

  produtos.forEach((produto) => {
    const card = document.createElement("article");
    card.className = `menu-card ${tipo}-card`;

    const visual = document.createElement("div");
    visual.className = "card-visual";
    visual.setAttribute("aria-hidden", "true");

    // Troque este emoji por um ícone SVG inline ou uma foto local, se desejar.
    const emoji = document.createElement("span");
    emoji.className = "card-emoji";
    emoji.textContent = produto.icone;
    visual.appendChild(emoji);

    const conteudo = document.createElement("div");
    conteudo.className = "card-content";

    const titulo = document.createElement("h3");
    titulo.textContent = produto.nome;
    conteudo.appendChild(titulo);

    if (tipo === "pastry") {
      const descricao = document.createElement("p");
      descricao.textContent = "Feito na hora, crocante e sequinho.";
      conteudo.appendChild(descricao);
    }

    card.append(visual, conteudo);
    lista.appendChild(card);
  });
}

criarCards(pasteis, "pasteis-lista", "pastry");
criarCards(sucos, "sucos-lista", "drink");
criarCards(refrigerantes, "refrigerantes-lista", "drink");

// Controla o menu de navegação em telas pequenas.
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".nav-links");

function fecharMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  menuLinks.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const aberto = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
  menuLinks.classList.toggle("is-open", !aberto);
});

menuLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    fecharMenu();
    menuToggle.focus();
  }
});

// Anima a entrada dos blocos ao rolar, respeitando a preferência de movimento reduzido.
document.documentElement.classList.add("js");
const elementosRevelar = document.querySelectorAll(".reveal");
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !movimentoReduzido) {
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("is-visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  elementosRevelar.forEach((elemento) => observador.observe(elemento));
} else {
  elementosRevelar.forEach((elemento) => elemento.classList.add("is-visible"));
}
