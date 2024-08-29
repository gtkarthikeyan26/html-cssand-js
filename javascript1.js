var button = document.getElementById("click_me")
var input = document.getElementById("enter")
var ul = document.querySelector("ul")

function input_length(){
    return input.value.length
}

function create_element(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.append(li);
        input.value =""
}
button.addEventListener("click", addlistafterclick)

input.addEventListener("keydown", addlistafterenter);

function addlistafterclick() {
    if (input_length()>0) {
        create_element();
    }
}

function addlistafterenter(event){
    if (input_length()>0 && event.key === "Enter") {
        create_element();
    }
}