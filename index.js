function new_round() {
    var randomNumber1 = Math.ceil(Math.random()*6)
    var randomNumber2 = Math.ceil(Math.random()*6)

    var left_dice = document.querySelectorAll("img")[0].src.replace(/(dice[0-9])/, "dice"+randomNumber1)
    document.querySelectorAll("img")[0].src = left_dice
    var right_dice = document.querySelectorAll("img")[1].src.replace(/(dice[0-9])/, "dice"+randomNumber2)
    document.querySelectorAll("img")[1].src = right_dice

    if (randomNumber1 > randomNumber2){
        document.querySelector("#message").innerHTML = "Player 1 won!"
    }
    else if (randomNumber1 == randomNumber2){
        document.querySelector("#message").innerHTML = "Draw!"
    }
    else {
        document.querySelector("#message").innerHTML = "Player 2 won!"
    }
}


