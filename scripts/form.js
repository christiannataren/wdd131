const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


function fill_products(products) {
    let container = document.querySelector("#products");
    products.map(product => {
        let option = document.createElement("option");
        option.setAttribute("value", product.id);
        option.textContent = product.name;
        container.appendChild(option);

    })

}

function select_all_features() {
    let all = document.querySelector("#select-all").checked;
    let checkboxes = Array.from(document.querySelectorAll("input")).filter(input => input.type == "checkbox");
    checkboxes.map(check => {
        if (!all) {
            check.checked = false;
        } else {
            check.checked = true;
        }
    })
}

if (window.location.pathname.includes("/form.html")) {
    let select = document.querySelector("#select-all");
    select.addEventListener("click", select_all_features);
    // select_all_features();
    fill_products(products);
}
if (window.location.pathname.includes("review.html")) {
    // if (window.localStorage.)
    console.log(window.localStorage.getItem("visits"));
    let visits = parseInt(window.localStorage.getItem("visits"));
    if (isNaN(visits)) {
        visits = 0
    }
    visits = visits + 1;
    let sent = document.querySelector("#sent").textContent = `You have sent ${visits} reviews.`;
    window.localStorage.setItem("visits", visits.toString());
    console.log(visits);
    // window.localStorage.clear();
}




