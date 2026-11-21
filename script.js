// Edite os nomes dos itens nestas listas para atualizar o cardápio.
const pasteis = [
  { nome: "Pastel de carne", icone: "carne" },
  { nome: "Pastel de queijo", icone: "queijo" },
  { nome: "Pastel de carne com queijo", icone: "carneQueijo" },
  { nome: "Pastel de frango", icone: "frango" },
  { nome: "Pastel de frango com catupiry", icone: "frangoCatupiry" },
  { nome: "Pastel de camarão", icone: "camarao" }
];

const sucos = [
  { nome: "Suco de uva", icone: "sucoUva" },
  { nome: "Suco de laranja", icone: "sucoLaranja" }
];

const refrigerantes = [
  { nome: "Coca-Cola lata 220 ml", icone: "lataVermelha" },
  { nome: "Coca-Cola garrafinha 200 ml", icone: "garrafinhaVermelha" },
  { nome: "Coca-Cola garrafa 2 L", icone: "garrafaVermelha" },
  { nome: "Pepsi lata 350 ml", icone: "lataAzul" },
  { nome: "Pepsi garrafa 2 L", icone: "garrafaAzul" }
];

// Mantém todos os desenhos no mesmo tamanho e com o mesmo contorno.
function criarSvg(conteudo) {
  return `<svg viewBox="0 0 64 64" width="96" height="96" aria-hidden="true" focusable="false" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${conteudo}</svg>`;
}

// Ilustrações originais em SVG; as embalagens são genéricas e não usam logotipos.
const iconesCardapio = {
  // Pastel de carne
  carne: criarSvg(`
    <defs><linearGradient id="grad-carne" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#E57368"/><stop offset=".55" stop-color="#C0392B"/><stop offset="1" stop-color="#8E2A1F"/></linearGradient></defs>
    <ellipse cx="33" cy="51" rx="24" ry="4" fill="#111111" opacity=".18"/>
    <path d="M10 28C13 16 25 9 39 12c11 2 17 10 15 20-3 13-16 20-29 16C14 45 7 38 10 28z" fill="url(#grad-carne)" stroke="#8E2A1F"/>
    <path d="M11 27c-5-4-8 4-3 9l9 8 8-8z" fill="#FFF3E0" stroke="#E6CFA8"/>
    <path d="M25 30l10 11-5 5-10-11z" fill="#FFF3E0" stroke="#E6CFA8"/>
    <path d="M29 30l8 8-9 8-7-8z" fill="#FFF3E0" stroke="#E6CFA8"/>
    <path d="M18 18l22 23" fill="none" stroke="#8E2A1F" stroke-width="5" opacity=".9"/>
    <path d="M31 13l20 21" fill="none" stroke="#6D3B14" stroke-width="5" opacity=".75"/>
    <ellipse cx="19" cy="20" rx="6" ry="3" fill="#FFFFFF" opacity=".6" transform="rotate(-22 19 20)"/>
    <ellipse cx="48" cy="31" rx="3" ry="2" fill="#FFFFFF" opacity=".45"/>
  `),
  // Pastel de queijo
  queijo: criarSvg(`
    <defs><linearGradient id="grad-queijo" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#FFE99A"/><stop offset=".7" stop-color="#FFD54F"/><stop offset="1" stop-color="#F9A825"/></linearGradient></defs>
    <ellipse cx="32" cy="52" rx="24" ry="4" fill="#111111" opacity=".16"/>
    <path d="M8 49L31 10l25 39z" fill="url(#grad-queijo)" stroke="#D69B20"/>
    <path d="M31 10l25 39H46L31 23z" fill="#F9A825" opacity=".82"/>
    <ellipse cx="23" cy="32" rx="4" ry="3.2" fill="#B68A45" stroke="none"/>
    <ellipse cx="38" cy="41" rx="3.2" ry="2.7" fill="#B68A45" stroke="none"/>
    <ellipse cx="18" cy="43" rx="2.5" ry="2" fill="#B68A45" stroke="none"/>
    <ellipse cx="28" cy="19" rx="4" ry="2" fill="#FFFFFF" opacity=".65" transform="rotate(-42 28 19)"/>
    <ellipse cx="24" cy="31" rx="1.2" ry=".8" fill="#FFECC1" opacity=".9"/>
    <ellipse cx="37" cy="40" rx="1" ry=".7" fill="#FFECC1" opacity=".9"/>
  `),
  // Pastel de carne com queijo
  carneQueijo: criarSvg(`
    <defs><linearGradient id="grad-carne-queijo" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#E57368"/><stop offset=".7" stop-color="#C0392B"/><stop offset="1" stop-color="#8E2A1F"/></linearGradient></defs>
    <ellipse cx="32" cy="52" rx="25" ry="4" fill="#111111" opacity=".17"/>
    <path d="M5 29c2-10 12-16 23-14 9 2 14 9 12 17-3 10-13 15-23 12C9 42 4 37 5 29z" fill="url(#grad-carne-queijo)" stroke="#8E2A1F"/>
    <path d="M9 28l8-7 7 7-6 7z" fill="#FFF3E0" stroke="#E6CFA8"/>
    <path d="M26 18l16 22" fill="none" stroke="#6D3B14" stroke-width="4"/>
    <ellipse cx="14" cy="22" rx="5" ry="2" fill="#FFFFFF" opacity=".55"/>
    <path d="M28 48L43 17l17 31z" fill="#FFD54F" stroke="#D69B20"/>
    <path d="M43 17l17 31H50L43 29z" fill="#F9A825"/>
    <ellipse cx="40" cy="37" rx="3" ry="2.4" fill="#B68A45"/>
    <ellipse cx="49" cy="42" rx="2.5" ry="2" fill="#B68A45"/>
    <ellipse cx="45" cy="24" rx="4" ry="2" fill="#FFFFFF" opacity=".6" transform="rotate(-42 45 24)"/>
    <ellipse cx="17" cy="29" rx="2" ry="1" fill="#FFFFFF" opacity=".5"/>
  `),
  // Pastel de frango
  frango: criarSvg(`
    <defs><linearGradient id="grad-frango" x1=".2" y1="0" x2=".8" y2="1"><stop stop-color="#F5B95F"/><stop offset=".55" stop-color="#E0902B"/><stop offset="1" stop-color="#B5651D"/></linearGradient></defs>
    <ellipse cx="32" cy="53" rx="21" ry="4" fill="#111111" opacity=".17"/>
    <g transform="rotate(-42 32 32)">
      <path d="M24 6c9-2 17 4 17 14 0 9-5 16-11 21l-12-4C12 27 13 10 24 6z" fill="url(#grad-frango)" stroke="#B5651D"/>
      <ellipse cx="21" cy="15" rx="5" ry="3" fill="#FFFFFF" opacity=".6" transform="rotate(-25 21 15)"/>
      <ellipse cx="34" cy="32" rx="4" ry="6" fill="#B5651D" opacity=".35"/>
      <path d="M30 37l2 12 7 2 3-13z" fill="#FFF3E0" stroke="#E6CFA8"/>
      <circle cx="36" cy="51" r="5" fill="#FFF3E0" stroke="#E6CFA8"/>
      <circle cx="43" cy="51" r="5" fill="#FFF3E0" stroke="#E6CFA8"/>
    </g>
  `),
  // Pastel de frango com catupiry
  frangoCatupiry: criarSvg(`
    <defs><linearGradient id="grad-frango-cat" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F5B95F"/><stop offset=".7" stop-color="#E0902B"/><stop offset="1" stop-color="#B5651D"/></linearGradient></defs>
    <ellipse cx="31" cy="53" rx="25" ry="4" fill="#111111" opacity=".16"/>
    <g transform="rotate(-38 16 34)">
      <path d="M9 15c7-3 14 1 16 8 2 7-2 13-8 16l-11-5c-4-7-3-16 3-19z" fill="url(#grad-frango-cat)" stroke="#B5651D"/>
      <ellipse cx="12" cy="20" rx="4" ry="2" fill="#FFFFFF" opacity=".58" transform="rotate(-30 12 20)"/>
      <path d="M11 38l-1 10 7 2 3-11z" fill="#FFF3E0" stroke="#E6CFA8"/>
    </g>
    <path d="M34 30h27v16c0 7-6 9-14 9s-13-3-13-9z" fill="#FFFFFF" stroke="#C9C4B8"/>
    <ellipse cx="47" cy="30" rx="14" ry="6" fill="#FFFDF7" stroke="#C9C4B8"/>
    <ellipse cx="47" cy="30" rx="9" ry="3" fill="#F4EDE1"/>
    <path d="M35 23l22-9 5 8-24 10z" fill="#FFB74D" stroke="#E65100"/>
    <path d="M47 30c-7-1-8-8-3-10 5-2 7 5 10 3 4-2 7 3 3 6z" fill="#FFFFFF" stroke="#C9C4B8"/>
    <ellipse cx="40" cy="27" rx="2" ry="1" fill="#FFFFFF" opacity=".8"/>
  `),
  // Pastel de camarão
  camarao: criarSvg(`
    <defs><linearGradient id="grad-camarao" x1=".2" y1="0" x2=".8" y2="1"><stop stop-color="#FF9E80"/><stop offset=".6" stop-color="#FF7043"/><stop offset="1" stop-color="#D84315"/></linearGradient></defs>
    <ellipse cx="32" cy="53" rx="23" ry="4" fill="#111111" opacity=".16"/>
    <path d="M12 25C14 14 25 8 36 12c10 4 15 13 10 22-5 10-16 15-26 11-10-4-12-12-8-20z" fill="url(#grad-camarao)" stroke="#D84315"/>
    <path d="M16 13c7 5 10 12 7 20" fill="#FF9E80" opacity=".72"/>
    <path d="M25 12c8 6 10 14 6 22" fill="#FF9E80" opacity=".58"/>
    <path d="M36 15c7 7 7 15 2 21" fill="#FF9E80" opacity=".5"/>
    <path d="M43 38c4 3 8 6 12 7l-8 5-9-6z" fill="#FF7043" stroke="#D84315"/>
    <path d="M46 45l9 1-5 7-9-3z" fill="#D84315" stroke="#D84315"/>
    <path d="M12 22c-5-7-2-13 4-16M13 23C7 20 5 16 4 12" fill="none" stroke="#D84315"/>
    <circle cx="13" cy="24" r="2.2" fill="#111111" stroke="#111111"/>
    <ellipse cx="15" cy="17" rx="3" ry="1.8" fill="#FFFFFF" opacity=".7"/>
    <path d="M20 43l-6 7M30 45l-3 8M39 43l1 8" fill="none" stroke="#D84315"/>
  `),
  // Suco de uva
  sucoUva: criarSvg(`
    <defs><linearGradient id="grad-suco-uva" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#9C4DCC"/><stop offset=".55" stop-color="#6A1B9A"/><stop offset="1" stop-color="#4A148C"/></linearGradient></defs>
    <ellipse cx="32" cy="53" rx="24" ry="4" fill="#111111" opacity=".16"/>
    <path d="M8 18h27l-3 35H11z" fill="url(#grad-suco-uva)" stroke="#4A148C"/>
    <ellipse cx="21.5" cy="18" rx="13.5" ry="4" fill="#DCC7EC" stroke="#4A148C"/>
    <path d="M29 17l8-12" fill="none" stroke="#CFD8DC" stroke-width="4"/>
    <ellipse cx="21" cy="24" rx="3" ry="10" fill="#FFFFFF" opacity=".28"/>
    <circle cx="46" cy="29" r="5" fill="#6A1B9A" stroke="#4A148C"/>
    <circle cx="54" cy="29" r="5" fill="#9C4DCC" stroke="#4A148C"/>
    <circle cx="42" cy="38" r="5" fill="#9C4DCC" stroke="#4A148C"/>
    <circle cx="50" cy="38" r="5" fill="#6A1B9A" stroke="#4A148C"/>
    <circle cx="58" cy="38" r="5" fill="#4A148C" stroke="#4A148C"/>
    <circle cx="46" cy="47" r="5" fill="#6A1B9A" stroke="#4A148C"/>
    <circle cx="54" cy="47" r="5" fill="#4A148C" stroke="#4A148C"/>
    <path d="M49 24c-1-7 5-11 11-10-2 7-6 10-11 10z" fill="#43A047" stroke="#2E7D32"/>
    <path d="M48 24c3-5 7-7 11-9" fill="none" stroke="#6D3B14"/>
    <ellipse cx="44" cy="27" rx="1.3" ry=".8" fill="#FFFFFF" opacity=".7"/>
  `),
  // Suco de laranja
  sucoLaranja: criarSvg(`
    <defs><linearGradient id="grad-suco-laranja" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#FFB74D"/><stop offset=".6" stop-color="#FF9800"/><stop offset="1" stop-color="#E65100"/></linearGradient></defs>
    <ellipse cx="31" cy="53" rx="23" ry="4" fill="#111111" opacity=".16"/>
    <path d="M9 18h28l-3 35H12z" fill="url(#grad-suco-laranja)" stroke="#E65100"/>
    <ellipse cx="23" cy="18" rx="14" ry="4" fill="#FFF0CC" stroke="#E65100"/>
    <path d="M31 17l8-12" fill="none" stroke="#CFD8DC" stroke-width="4"/>
    <ellipse cx="21" cy="24" rx="3" ry="10" fill="#FFFFFF" opacity=".34"/>
    <circle cx="48" cy="26" r="12" fill="#FF9800" stroke="#E65100"/>
    <circle cx="48" cy="26" r="8" fill="#FFCC80" stroke="#FF9800"/>
    <path d="M48 18v16M40 26h16M42 20l12 12M54 20L42 32" fill="none" stroke="#FF9800" stroke-width="1.2"/>
    <circle cx="45" cy="23" r="1.5" fill="#FFFFFF" opacity=".7"/>
  `),
  // Coca-Cola lata 220 ml
  lataVermelha: criarSvg(`
    <defs><linearGradient id="grad-lata-vermelha" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#9A0007"/><stop offset=".25" stop-color="#FF6659"/><stop offset=".55" stop-color="#D32F2F"/><stop offset="1" stop-color="#9A0007"/></linearGradient></defs>
    <ellipse cx="32" cy="57" rx="17" ry="3" fill="#111111" opacity=".16"/>
    <path d="M18 14l3-4h22l3 4v39l-4 5H22l-4-5z" fill="url(#grad-lata-vermelha)" stroke="#9A0007"/>
    <ellipse cx="32" cy="12" rx="14" ry="5" fill="#CFD8DC" stroke="#90A4AE"/>
    <ellipse cx="32" cy="12" rx="7" ry="2" fill="#90A4AE"/>
    <ellipse cx="32" cy="56" rx="14" ry="4" fill="#CFD8DC" stroke="#90A4AE"/>
    <path d="M15 32c9 5 25-6 34 0v10c-9-5-25 6-34 0z" fill="#FFFFFF"/>
    <path d="M15 36c9 5 25-6 34 0v4c-9-5-25 6-34 0z" fill="#FF6659"/>
    <ellipse cx="23" cy="29" rx="2" ry="12" fill="#FFFFFF" opacity=".38"/>
    <circle cx="20" cy="23" r="1.2" fill="#FFFFFF" opacity=".8"/>
    <circle cx="43" cy="48" r="1" fill="#FFFFFF" opacity=".75"/>
  `),
  // Coca-Cola garrafinha 200 ml
  garrafinhaVermelha: criarSvg(`
    <defs><linearGradient id="grad-garrafa-vermelha" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#2B1A12"/><stop offset=".35" stop-color="#6D3B14"/><stop offset=".65" stop-color="#111111"/><stop offset="1" stop-color="#000000"/></linearGradient></defs>
    <ellipse cx="32" cy="58" rx="14" ry="3" fill="#111111" opacity=".16"/>
    <path d="M27 7h10v8l5 8v31c0 5-4 7-10 7s-10-2-10-7V23l5-8z" fill="url(#grad-garrafa-vermelha)" stroke="#111111"/>
    <rect x="27" y="4" width="10" height="5" rx="2" fill="#D32F2F" stroke="#9A0007"/>
    <path d="M22 31h20v13H22z" fill="#D32F2F" stroke="#9A0007"/>
    <path d="M22 34c6 4 14-5 20 0v4c-6-4-14 5-20 0z" fill="#FFFFFF"/>
    <ellipse cx="27" cy="25" rx="2" ry="8" fill="#FFFFFF" opacity=".32"/>
    <circle cx="38" cy="27" r="1" fill="#FFFFFF" opacity=".7"/>
    <circle cx="25" cy="48" r="1" fill="#FFFFFF" opacity=".55"/>
  `),
  // Coca-Cola garrafa 2 L
  garrafaVermelha: criarSvg(`
    <defs><linearGradient id="grad-garrafa-2l-vermelha" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#2B1A12"/><stop offset=".3" stop-color="#6D3B14"/><stop offset=".7" stop-color="#111111"/><stop offset="1" stop-color="#000000"/></linearGradient></defs>
    <ellipse cx="32" cy="61" rx="17" ry="3" fill="#111111" opacity=".16"/>
    <path d="M27 3h10v9l5 7 5 9v29l-5 5H22l-5-5V28l5-9 5-7z" fill="url(#grad-garrafa-2l-vermelha)" stroke="#111111"/>
    <rect x="26" y="1" width="12" height="5" rx="2" fill="#D32F2F" stroke="#9A0007"/>
    <path d="M17 32h30v15H17z" fill="#D32F2F" stroke="#9A0007"/>
    <path d="M17 35c8 5 22-5 30 0v5c-8-5-22 5-30 0z" fill="#FFFFFF"/>
    <path d="M21 56l-4 5h30l-4-5z" fill="#111111"/>
    <ellipse cx="25" cy="27" rx="2.5" ry="9" fill="#FFFFFF" opacity=".28"/>
    <circle cx="38" cy="27" r="1" fill="#FFFFFF" opacity=".65"/>
    <circle cx="43" cy="53" r="1" fill="#FFFFFF" opacity=".55"/>
  `),
  // Pepsi lata 350 ml
  lataAzul: criarSvg(`
    <defs><linearGradient id="grad-lata-azul" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0D47A1"/><stop offset=".25" stop-color="#42A5F5"/><stop offset=".55" stop-color="#1565C0"/><stop offset="1" stop-color="#0D47A1"/></linearGradient></defs>
    <ellipse cx="32" cy="57" rx="17" ry="3" fill="#111111" opacity=".16"/>
    <path d="M18 14l3-4h22l3 4v39l-4 5H22l-4-5z" fill="url(#grad-lata-azul)" stroke="#0D47A1"/>
    <ellipse cx="32" cy="12" rx="14" ry="5" fill="#CFD8DC" stroke="#90A4AE"/>
    <ellipse cx="32" cy="12" rx="7" ry="2" fill="#90A4AE"/>
    <ellipse cx="32" cy="56" rx="14" ry="4" fill="#CFD8DC" stroke="#90A4AE"/>
    <circle cx="32" cy="34" r="10" fill="#FFFFFF"/>
    <path d="M22 31c7-3 14 6 20 1v7c-7 4-14-6-20-1z" fill="#1565C0"/>
    <path d="M22 37c7-3 14 6 20 1v3c-7 4-14-6-20-1z" fill="#D32F2F"/>
    <ellipse cx="23" cy="29" rx="2" ry="12" fill="#FFFFFF" opacity=".38"/>
    <circle cx="20" cy="23" r="1.2" fill="#FFFFFF" opacity=".8"/>
    <circle cx="43" cy="48" r="1" fill="#FFFFFF" opacity=".75"/>
  `),
  // Pepsi garrafa 2 L
  garrafaAzul: criarSvg(`
    <defs><linearGradient id="grad-garrafa-2l-azul" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#2B1A12"/><stop offset=".3" stop-color="#6D3B14"/><stop offset=".7" stop-color="#111111"/><stop offset="1" stop-color="#000000"/></linearGradient></defs>
    <ellipse cx="32" cy="61" rx="17" ry="3" fill="#111111" opacity=".16"/>
    <path d="M27 3h10v9l5 7 5 9v29l-5 5H22l-5-5V28l5-9 5-7z" fill="url(#grad-garrafa-2l-azul)" stroke="#111111"/>
    <rect x="26" y="1" width="12" height="5" rx="2" fill="#1565C0" stroke="#0D47A1"/>
    <path d="M17 32h30v15H17z" fill="#1565C0" stroke="#0D47A1"/>
    <circle cx="32" cy="39" r="7" fill="#FFFFFF"/>
    <path d="M25 37c5-2 10 5 14 1v4c-5 3-10-5-14-1z" fill="#1565C0"/>
    <path d="M25 43c5-2 10 3 14 1v2c-5 3-10-3-14-1z" fill="#D32F2F"/>
    <path d="M21 56l-4 5h30l-4-5z" fill="#111111"/>
    <ellipse cx="25" cy="27" rx="2.5" ry="9" fill="#FFFFFF" opacity=".28"/>
    <circle cx="38" cy="27" r="1" fill="#FFFFFF" opacity=".65"/>
    <circle cx="43" cy="53" r="1" fill="#FFFFFF" opacity=".55"/>
  `)
};

// Monta os cards sem preços nem descrições não confirmadas.
function criarCards(produtos, elementoId, tipo) {
  const lista = document.getElementById(elementoId);

  produtos.forEach((produto) => {
    const card = document.createElement("article");
    card.className = `menu-card ${tipo}-card`;

    const visual = document.createElement("div");
    visual.className = "card-visual";
    visual.setAttribute("aria-hidden", "true");

    const circuloIcone = document.createElement("span");
    circuloIcone.className = "card-icon-circle";
    circuloIcone.innerHTML = iconesCardapio[produto.icone];
    visual.appendChild(circuloIcone);

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
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const aberto = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
  menuLinks.classList.toggle("is-open", !aberto);
  document.body.classList.toggle("menu-open", !aberto);
});

menuLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

document.addEventListener("click", (evento) => {
  const menuEstaAberto = menuToggle.getAttribute("aria-expanded") === "true";
  if (
    menuEstaAberto &&
    !menuLinks.contains(evento.target) &&
    !menuToggle.contains(evento.target)
  ) {
    fecharMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    fecharMenu();
  }
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
