let button = document.querySelector("button");
let input = document.querySelector("#favchap");
let list = document.querySelector("#list");

function create_element(element) {
    return document.createElement(element);
}
function createLi(data) {
    let li = create_element("li");
    li.textContent = data;
    let button_delete = create_element("button");
    button_delete.textContent = "❌";
    button_delete.addEventListener("click", (event) => {
        event.target.parentNode.remove();
        input.focus();
    });
    li.appendChild(button_delete);
    input.value = "";
    return li;
}

function start() {
    let data = input.value.trim();
    if (data === "") {
        input.focus();
        return;
    }
    let li = createLi(data);
    list.appendChild(li);
}


