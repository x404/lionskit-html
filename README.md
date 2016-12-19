Lionskit
================

Верстка расположена по адресу [http://lionskit.proverstka.com.ua/](http://lionskit.proverstka.com.ua)

Все комментарии вроде "InstanceBegin, InstanceBeginEditable, InstanceEndEditable" из кода при программировании убирать! Такие комментарии оставляет шаблонизатор dreamweaver.


---------------------------------------------------------

**Главная страница**

Скрипт для подгрузки фото из инстаграма взял готовый тут - [http://inwidget.ru/](http://inwidget.ru/)

Необходимо будет для пользователя lions_kit получить ACCESS TOKEN. Все делать по инструкции на странице [http://inwidget.ru/](http://inwidget.ru/) - пункты 3 и 4. После этого будет отображаться лента этого пользователя.

В файле homepage.php подключается шаблон для формирования картинок. Сам код находится в файле 'inwidget/template.php'; показал вставки кода из картинок, которые подгружаются из instagram. В файле 3 одинаковых цикла. Как сформировать очередность наполнения каждого из слайдов пусть думает PHP-программист.

Во всех html файлах прописана строка запрета индексации - не забыть ее удалить. Также не нужен robots.txt, который идет в верстке. Это все запрет от индексации поисковиками на поддомене.

Less файлы/каталоге нужны только в верстке, при программировании они участия не принимают.

---------------------------------------------------------

**Контакты** (contacts.html)


Получение ключа для Google Map делать тут: [https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&hl=ru](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&hl=ru)

После чего в строке
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbr6YM4VFH1Qxt_YNWH9zTmouLVxHShrE&callback=initMap"></script>
изменить ключ key на сгенерированный в Console Google

---------------------------------------------------------

**Контакты** (contacts.html)

Изображение с правой стороны должно внедряться также через инлайновые стили, т.к. по другому масштабировать для десктопной версии его максимально по высоте/ширине без искажений не получится.

---------------------------------------------------------

__Используемые в проекте js плагины__
* Карусель owl-carousel [http://owlcarousel2.github.io/OwlCarousel2/](http://owlcarousel2.github.io/OwlCarousel2/)
* Карусель slick [http://kenwheeler.github.io/slick/](http://kenwheeler.github.io/slick/)
*  Прокрутка mCustomScrollbar [http://manos.malihu.gr/jquery-custom-content-scroller/?5](http://manos.malihu.gr/jquery-custom-content-scroller/?5)
* Валидация полей ввода в формах jquery validation [http://jqueryvalidation.org/](http://jqueryvalidation.org/)
* Маска ввода в поле с телефоном inputmask [https://github.com/RobinHerbots/Inputmask](https://github.com/RobinHerbots/Inputmask)
* Всплывающие окна bootstrap modal[http://getbootstrap.com/javascript/#modals-methods](http://getbootstrap.com/javascript/#modals-methods)
* Сообщение для устаревших браузеров Outdated Browser v1.1.3[https://github.com/burocratik/outdated-browser](https://github.com/burocratik/outdated-browser) [Демо](http://outdatedbrowser.com/ru)

---------------------------------------------------------