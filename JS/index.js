let root = document.querySelector("#root");

const materialMembers = [
    "Alpha" , "Apple" , "Antman" , "Boomar" , "Zyman" , "Zingzong" , "Yack" , "Yang" ,
    "Christopher" , "John"
]

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id","input-search");

window.onload = () => {
    input.focus();
}

let button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id","input-btn");
button.textContent = "Search";

button.onclick = () => searchFunc(input.value);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        button.click();
    }
})

let showSearch = document.createElement("div");
showSearch.setAttribute("id", "search-results");
let inputs = document.createElement("div");
inputs.setAttribute("id", "inputs");
inputs.append(input,button);

root.append(inputs,showSearch);


// Main Function - searchFunc();

showSearch.innerHTML = materialMembers.join("<br/>");
const searchFunc = (value) => {
    value = value.toLowerCase();
    let filteredMembers = materialMembers.filter((each)=>{
        return each.toLowerCase().includes(value)
    })
    if (filteredMembers.length === 0 || value === ''){

        showSearch.innerHTML = materialMembers.join('<br/>');
        document.title = `Search | Home`;
    }
    else{
        showSearch.innerHTML = filteredMembers.join("<br/>");
        let finalTitle = input.value.split('');
        finalTitle = finalTitle[0].toUpperCase() +  finalTitle.slice(1).join('');
        document.title = `Search | ${finalTitle}`
    }
}