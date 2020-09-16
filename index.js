const randomPintas = () => {
    let pinta = ["&diams;", "&spades;", "&clubs;", "&hearts;"];
    let randomPinta = Math.floor(Math.random() * pinta.length);
    return pinta[randomPinta];
}
let random = randomPintas();

window.onload = () => {
    if (random == "&diams;" || random == "&hearts;") {
        document.querySelector("#icon").style.color = "#E91F1F";
        document.querySelector("#iconFlip").style.color = "#E91F1F";

    }
    document.querySelector("#icon").innerHTML = random;
    document.querySelector("#iconFlip").innerHTML = random;
    document.querySelector(".number").innerHTML = randomNumber();
};

const randomNumber = () => {
    let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let randomNum = Math.floor(Math.random() * numeros.length);
    return numeros[randomNum];
}