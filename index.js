const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
let name = "Broom";
function appendCat(name) {
    return [...cats, name];
}

name = "Arnold";
function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0,2);
}

function removeFirstCat() {
    return cats.slice(1);
}