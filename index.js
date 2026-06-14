// let fruits = ["apple", "orange", "banana" ]


function flip(){

    let diceNum = document.getElementById("diceNum").value;
    let diceResult = document.getElementById("diceResult");
    let diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i = 0; i < diceNum ; i++ ){
        const value = Math.floor(Math.random()* 6 ) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(", ")}`
    diceImage.innerHTML = images.join("");
}