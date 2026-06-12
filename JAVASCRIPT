document.getElementById("btnSaibaMais").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Mensagem enviada com sucesso! Entraremos em contato.");

    formulario.reset();
});

