const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tuxtla Gutiérrez Mexico",
        location: "Tuxtla Gutiérrez, Chiapas, Mexico",
        dedicated: "2000, March, 12",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tuxtla-gutierrez-mexico-temple/tuxtla-gutierrez-mexico-temple-15226-main.jpg"
    },
    {
        templeName: "Villahermosa Mexico",
        location: "Villahermosa, Tabasco, Mexico",
        dedicated: "2000, May, 21",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/villahermosa-mexico-temple/villahermosa-mexico-temple-34379-main.jpg"
    },
    {
        templeName: "Oaxaca Mexico",
        location: "Oaxaca, Oaxaca, Mexico",
        dedicated: "2000, March, 11",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oaxaca-mexico-temple/oaxaca-mexico-temple-41774-main.jpg"
    },
    // Add more temple objects here...
];

const burguer = document.getElementById("burguer");
function create(element) {
    return document.createElement(element);
}

function templateImage(temple) {
    return `<div class="tab-temple">
                <h2>${temple.templeName}</h2>
                <div><span class="data">Location:</span><span class="value">${temple.location}</span></div>
                <div><span class="data">Dedicated:</span><span class="value">${temple.dedicated}</span></div>
                <div><span class="data">Size:</span><span class="value">${temple.area}</span></div>
                <figure>
                    <img src="${temple.imageUrl}" alt="temple in ${temple.location}" loading="lazy" />
                </figure>
            </div>`;
}
function addTemples(temples) {
    let container = document.querySelector(".image-container");
    container.innerHTML = "";
    let images = temples.map(temple => templateImage(temple));
    container.innerHTML = images.join("");
}
function resetNavigation(nuevo) {
    let nav = document.querySelector("#navigation");
    Array.from(nav.getElementsByTagName("a")).map(enlace => {
        enlace.classList.remove("active");
    });
    nuevo.classList.add("active");

}
burguer.addEventListener("click", function () {
    const nav = document.getElementById("navigation");
    console.log(nav);
    nav.classList.toggle("flex");
    burguer.classList.toggle("open");
    console.log(nav);
});


addTemples(temples);

document.querySelector("#home").addEventListener("click", function () {
    addTemples(temples);
    resetNavigation(this);
})
document.querySelector("#old").addEventListener("click", function () {
    // console.log(temples[0].dedicated.split(",")[0]);
    let old = temples.filter(temple => Number(temple.dedicated.split(",")[0]) <= 1900);

    addTemples(old);
    resetNavigation(this);
})
document.querySelector("#new").addEventListener("click", function () {
    // console.log(temples[0].dedicated.split(",")[0]);
    let news = temples.filter(temple => Number(temple.dedicated.split(",")[0]) >= 2000);

    addTemples(news);
    resetNavigation(this);
})

document.querySelector("#large").addEventListener("click", function () {
    addTemples(temples.filter(temple => temple.area >= 90000));
    resetNavigation(this);
})
document.querySelector("#small").addEventListener("click", function () {
    addTemples(temples.filter(temple => temple.area <= 10000));
    resetNavigation(this);
})