const burguer = document.getElementById("burguer");

burguer.addEventListener("click", function () {
    const nav = document.getElementById("navigation");
    console.log(nav);
    nav.classList.toggle("flex");
    burguer.classList.toggle("open");
    console.log(nav);
});