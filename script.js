document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("changeText");
    let message = document.getElementById("message");

    let originalText = "Натисни кнопку, щоб змінити цей текст.";
    let newText = "Текст змінено! 🎉";

    button.addEventListener("click", function () {
        // Перевіряємо, який зараз текст і міняємо його
        if (message.textContent === originalText) {
            message.textContent = newText;
        } else {
            message.textContent = originalText;
        }
    });
});
