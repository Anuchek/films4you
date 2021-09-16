function chooseLab(button) {
    document.querySelector(".labButtons .activeButton").className = "";
    document.querySelector(`#${button.id}`).className = "activeButton";
}

function chooseInfo(button) {
    document.querySelector(".infoButtons .activeButton").className = "";
    document.querySelector(`#${button.id}`).className = "activeButton";
    if (document.querySelector(".labButtons .activeButton").id === "lab1") {
        switch (button.id) {
            case "description":
                document.querySelector("main .content").innerHTML =
                    "<p> З розвитком інформаційних технологій та зацікавленістю людей до перегляду кіно зріс попит на пошукові\n" +
                    "                кіносервіси для швидкого підбору фільму. </p>\n" +
                    "            <p> Наш сервіс – зручна, сучасна, розумна система з багатофільтровим пошуком фільмів за різними параметрами\n" +
                    "                та ознаками, такими як назва, рік, рейтинг, жанр та країни створення фільму. Також сайт володіє\n" +
                    "                функціоналом сортування за рейтингом, датою, популярністю, віковою категорією та ін.</p>\n" +
                    "            <p> Акторами є користувачі системи: <i>адміністратор</i>, <i>незареєстрований (гість)</i> та <i>зареєстрований\n" +
                    "                користувач</i>,\n" +
                    "                які мають наступні можливості: </p>\n" +
                    "            <h3>Гість: </h3>\n" +
                    "            <ul>\n" +
                    "                <li> Пошук фільмів за допомогою фільтрів та сортування;</li>\n" +
                    "                <li> Перегляд інформації про фільм</li>\n" +
                    "                <li> Можливість зареєструватися на сайті</li>\n" +
                    "            </ul>\n" +
                    "            <br>\n" +
                    "            <h3> Зареєстрований користувач: </h3>\n" +
                    "            <ul>\n" +
                    "                <li> Пошук фільмів за допомогою фільтрів та сортування</li>\n" +
                    "                <li> Перегляд інформації про фільм</li>\n" +
                    "                <li> Додавання коментаря</li>\n" +
                    "                <li> Можливість ставити вподобайки/невподобайки</li>\n" +
                    "                <li> Додавання фільму в список улюблених</li>\n" +
                    "            </ul>\n" +
                    "            <br>\n" +
                    "            <h3> Адміністратор: </h3>\n" +
                    "            <ul>\n" +
                    "                <li> Додавання фільму в список улюблених</li>\n" +
                    "                <li> Видалення залишених користувачами коментарів до фільму</li>\n" +
                    "                <li> Блокування користувачів</li>\n" +
                    "            </ul>"
                break;
            case "topic":
                document.querySelector("main .content").innerHTML =
                    "<p><span class='bold'> Тема: </span> структура HTML-документа. Вибір предметної галузі. Робота з" +
                    " посиланнями, таблицями, зображеннями, формами в HTML-документі.</p>" +
                    "<p><span class='bold'> Мета: </span> придбати практичні навички роботи  з HTML-документом, " +
                    "таблицями, формами, зображеннями, посиланнями. Створити шаблон звітного HTML-документом для " +
                    "відображення результатів роботи всіх лабораторних робіт.\n</p>" +
                    "<p><span class='bold'> Посилання на ЛР: </span></p>";
                break;
            case "structure":
                document.querySelector("main .content").innerHTML = "<div class=\"structure\">\n" +
                    "                <div class=\"structureImg\"><img src=\"img/structure.png\" alt=\"\"></div>\n" +
                    "                <div class=\"structureInfo\"><p><i>index.html</i> - базовий HTML-документ </p>\n" +
                    "                    <p><i>temp.html</i> - HTML-документ з таблицею та формою</p>\n" +
                    "                    <p><i>style.css</i> - базовий css </p>\n" +
                    "                    <p><i>reset.css</i> - css, що обнуляє стилі, які за замовчуванням задані браузерами </p>\n" +
                    "                </div>\n" +
                    "            </div>";
                break;
            case "tables":
                document.querySelector("main .content").innerHTML = "<div class=\"tableFormImages\">\n" +
                    "                <div class=\"tableCodeImg\"><img src=\"img/tableCode.png\" alt=\"\"></div>\n" +
                    "                <div class=\"tableImg\"><img src=\"img/tableImg.png\" alt=\"\"></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"tableTheory\">\n" +
                    "                <p>Елемент &lt;table&gt; - контейнер для елементів, що визначають вміст таблиці</p>\n" +
                    "                <p> &lt;tr&gt; - створює рядок таблиці</p>\n" +
                    "                <p> &lt;td&gt; - створює комірки таблиці</p>\n" +
                    "                <p> &lt;thead&gt; - створює рядок, який розміщений зверху таблиці.</p>\n" +
                    "                <p> &lt;tfoot&gt; - створює рядок, який розміщений знизу таблиці.</p>\n" +
                    "            </div>";
                break;
            case "forms":
                document.querySelector("main .content").innerHTML = "<div class=\"tableFormImages\">\n" +
                    "                <div class=\"formCodeImg\"><img src=\"img/formCode.png\" alt=\"\"></div>\n" +
                    "                <div class=\"formImg\"><img src=\"img/tableImg.png\" alt=\"\"></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"formTheory\">\n" +
                    "                <p>Елемент &lt;form&gt; представляє собою розділ документа, що містить інтерактивні елементи\n" +
                    "                управління, які дозволяють користувачеві відправляти інформацію на веб-сервер.</p>\n" +
                    "                <p>&lt;input&gt; створює інтерактивні елементи управління в веб-формах для \n" +
                    "                    отримання даних від користувача</p>\n" +
                    "            </div>";
                break;
            case "images":
                document.querySelector("main .content").innerHTML = "<div class=\"imgImages\">\n" +
                    "                <div class=\"imgCode\"><img src=\"img/imgCode.png\" alt=\"\"></div>\n" +
                    "                <div class=\"imgImages\"><img src=\"img/imgImgs.png\" alt=\"\"></div>\n" +
                    "            </div>\n" +
                    "            <div class=\"formTheory\">\n" +
                    "                <p>HTML-елемент &lt;img&gt; вбудовує зображення в документ.</p>\n" +
                    "            </div>";
                break;
            case "conclusion":
                document.querySelector("main .content").innerHTML = "<p> Виконавши дану лабораторну роботу," +
                    " ми проаналізували сферу пошукових кіносервісів, що представлені на сучасному ринку, і розробили" +
                    " власний план створення системи багатофільтрового просунутого зручного кіносервісу. Також було" +
                    " створено звітний HTML-документ для відображення результатів роботи всіх лабораторних робіт.</p> ";
                break;
        }
    }
}