function sayHello(name)
{
    alert("Hello " + name);
}

function addElement()
{
    let title = document.createElement("h1");
    title.innerHTML = "Moinsen";
    document.body.appendChild(title);
}

let button = document.getElementById("clickme");
button.addEventListener("click", addElement);

document.addEventListener("scroll", addElement);