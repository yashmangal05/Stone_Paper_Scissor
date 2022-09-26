let result = document.querySelector("#decision");
const display_user = document.querySelector("#score1");
let main = document.querySelector("#images");
let contest = document.querySelector("#contest");
let score_user = 0;

let score = (number) => {
    images.style.display = "none";
    contest.style.display = "flex";
    let comp_selection = Math.floor(Math.random() * 3);
    console.log(comp_selection);
    if (number === '0') {
        document.getElementById("userPickImage").src = "./img/icon-rock.svg";
        if (comp_selection === 0) {
            document.getElementById("compPickImage").src = "./img/icon-rock.svg";
            result.textContent = "IT'S A TIE!";
        }
        else if (comp_selection === 1) {
            document.getElementById("compPickImage").src = "./img/icon-paper.svg";
            result.textContent = "YOU LOSE";
        }
        else {
            score_user = score_user + 1;
            display_user.textContent = score_user;
            document.getElementById("compPickImage").src = "./img/icon-scissors.svg";
            result.textContent = "YOU WIN";
        }
    }
    else if (number === '1') {
        document.getElementById("userPickImage").src = "./img/icon-paper.svg";
        if (comp_selection === 0) {
            score_user = score_user + 1;
            display_user.textContent = score_user;
            document.getElementById("compPickImage").src = "./img/icon-rock.svg";
            result.textContent = "YOU WIN";
        }
        else if (comp_selection === 1) {
            document.getElementById("compPickImage").src = "./img/icon-paper.svg";
            result.textContent = "IT'S A TIE!";
        }
        else {
            document.getElementById("compPickImage").src = "./img/icon-scissors.svg";
            result.textContent = "YOU LOSE";
        }
    }
    else {
        document.getElementById("userPickImage").src = "./img/icon-scissors.svg";
        if (comp_selection === 0) {
            document.getElementById("compPickImage").src = "./img/icon-rock.svg";
            result.textContent = "YOU LOSE";
        }
        else if (comp_selection === 1) {
            score_user = score_user + 1;
            display_user.textContent = score_user;
            document.getElementById("compPickImage").src = "./img/icon-paper.svg";
            result.textContent = "YOU WIN";
        }
        else {
            document.getElementById("compPickImage").src = "./img/icon-scissors.svg";
            result.textContent = "IT'S A TIE!";
        }
    }
}

let playAgain = () => {
    images.style.display = "flex";
    contest.style.display = "none";
}

let rules_box = document.getElementById("rules_box");

let rules_show = () => {
    rules_box.style.display = "flex";
}

rules_close = () => {
    rules_box.style.display = "none";
}
