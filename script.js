const textInput = document.querySelector("#text-input");
const btnAdd = document.querySelector("#btn-add");
const listContent = document.querySelector(".list-content");

let addLine = (e) => {
    if (!(e.type == "click" || (e.type == "keypress" && e.code == "Enter"))) {
        return;
    }

    if (!textInput.value) {
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const button = document.createElement("button");

    button.addEventListener("click", function() {
        li.remove();
    });

    span.classList.add("fa-solid", "fa-trash-can");

    p.textContent = textInput.value;

    button.appendChild(span);
    li.appendChild(p);
    li.appendChild(button);
    li.classList.add("item");

    textInput.value = "";

    listContent.appendChild(li);
}

btnAdd.addEventListener("click", addLine);
textInput.addEventListener("keypress", addLine)