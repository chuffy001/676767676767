
let ism = prompt("Введите ваше имя:");
let fam = prompt("Введите вашу фамилию:");
let ball = Number(prompt("Сколько баллов вы набрали?"));

let natija = document.querySelector("#natija");

natija.innerHTML = ism + " " + fam;

natija.style.textAlign = "center";
natija.style.marginTop = "200px";

if (ball >= 85) {
    natija.innerHTML += "<br>Вы поступили на грант!  67";
    document.body.style.backgroundColor = "green";
}
else if (ball >= 60) {
    natija.innerHTML += "<br>Вы поступили на контракт!  67";
    document.body.style.backgroundColor = "yellow";
}
else if (ball >= 30) {
    natija.innerHTML += "<br>Вы поступили на супер-контракт!  67";
    document.body.style.backgroundColor = "orangered";
}
else {
    natija.innerHTML += "<br>Вы не поступили!  67";
    document.body.style.backgroundColor = "red";
}