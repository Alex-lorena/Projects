document.addEventListener("DOMContentLoaded", function () {
    let home = document.getElementById("home");
    let contentor = document.querySelector(".contentor");
    let btnVerMais = document.getElementById("ver-mais");
    let btnVerMenos = document.getElementById("ver-menos");

    btnVerMais.addEventListener("click", function () {
        home.style.display = "none";
        contentor.style.display = "block";
    });

    btnVerMenos.addEventListener("click", function () {
        contentor.style.display = "none";
        home.style.display = "block";
    });
});
