Lionskit
================

Верстка расположена по адресу [http://lionskit.proverstka.com.ua/](http://lionskit.proverstka.com.ua)

Все комментарии вроде "InstanceBegin, InstanceBeginEditable, InstanceEndEditable" из кода при программировании убирать! Такие комментарии оставляет шаблонизатор dreamweaver.


---------------------------------------------------------

**Главная страница**

Скрипт для подгрузки фото из инстаграма взял готовый тут - [http://inwidget.ru/](http://inwidget.ru/)

Необходимо будет для пользователя lions_kit получить ACCESS TOKEN. Все делать по инструкции на странице [http://inwidget.ru/](http://inwidget.ru/) - пункты 3 и 4. После этого будет отображаться лента этого пользователя.

В файле homepage.php подключается шаблон для формирования картинок. Сам код находится в файле 'inwidget/template.php'; показал вставки кода из картинок, которые подгружаются из instagram. В файле 3 одинаковых цикла. Как сформировать очередность наполнения каждого из слайдов пусть думает PHP-программист.

---------------------------------------------------------

**Контакты** (contacts.html)


Получение ключа для Google Map делать тут: [https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&hl=ru](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&hl=ru)

После чего в строке
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbr6YM4VFH1Qxt_YNWH9zTmouLVxHShrE&callback=initMap"></script>
изменить ключ key на сгенерированный в Console Google

---------------------------------------------------------

