const navItems = document.querySelectorAll('.nav-tabs li');
const navWrapper = document.querySelector('.nav-wrapper');

function highlightActiveTab() {
    const wrapperRect = navWrapper.getBoundingClientRect();
    let closestIndex = 0;
    let closestDistance = Infinity;

    navItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.left - wrapperRect.left);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }
    });

    navItems.forEach(item => item.classList.remove('active'));
    navItems[closestIndex].classList.add('active');
}

// Отслеживаем событие прокрутки
navWrapper.addEventListener('scroll', highlightActiveTab);

// Инициализация - выделяем первый элемент при загрузке
highlightActiveTab();

// Получаем элементы модального окна
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal(info) {
    document.getElementById("modal-info").innerText = info; // Добавляем информацию
    modal.classList.add("show"); // Показываем модальное окно
}

// Функция для закрытия модального окна
span.onclick = function() {
    modal.classList.remove("show"); // Скрываем модальное окно
}

// Закрытие модального окна при нажатии вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show"); // Скрываем модальное окно
    }
}

// Добавляем обработчик события для каждой карточки
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var info = card.querySelector('.name').innerText + " - " + card.querySelector('.price').innerText; // Получаем информацию о товаре
        openModal(info); // Открываем модальное окно
    });
});

function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");

link1.addEventListener('click', () => {
    scrollToElement('#burgers-section');
});