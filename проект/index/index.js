// Получение модального окна
var modal = document.getElementById("myModal");

// Получение кнопки, которая открывает модальное окно
var btn = document.getElementById("openModal");

// Получение элемента <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открывается модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрывается модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает в любое место вне модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}