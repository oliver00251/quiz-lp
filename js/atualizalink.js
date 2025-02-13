document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("5Y3Jtg");

  if (button) {
    button.onclick = function (event) {
      event.preventDefault(); // Previne o comportamento padrão do botão
      alert("Botão clicado!");
    };
  }
});
;

function updateLinks() {
    const button = document.getElementById("5Y3Jtg");
    const hiddenLink = document.getElementById("5Y3Jtg-ref");
  
    const newURL = "https://g1.globo.com/";
  
    if (button) {
      button.setAttribute("data-href", newURL);
        button.onclick = function () {
        window.location.href = newURL;
      };
    }
  
    if (hiddenLink) {
      hiddenLink.setAttribute("href", newURL);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    updateLinks();
  
    setInterval(updateLinks, 1000); 
  });
  