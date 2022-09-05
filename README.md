# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Приложение Music Player музыкальный сервис

#### Работа приложения

- [x] Регистрация (log in)
- [x] Возможность залогиниться и разлогиниться (sign up, sign out)
- [x] При отсутствии доступа с MongoDB есть возможность войти в приложение без регистрации
- [x] Встроенный в приложение плеер:
  - [x] прослушивание музыки,
  - [x] постановка на паузу и снятие с нее,
  - [x] перемотка,
  - [x] повтор трека,
  - [x] shuffle плейлиста
  - [ ] статистика, которая отображает прогресс работы приложения (время проигрывания трека/время, оставшееся до конца)
- [ ] Функция караоке
- [x] Витрина с доступными треками
- [ ] Добавление трека в избранное: зарегистрированные пользователи могут ставить лайки на песни, которые сохраняются в отдельную вкладку "Мои треки"
- [x] Выделение треков и возможность их перемещения (dnd)
- [x] Поиск треков с фильтрацией по названию или имени исполнителя
- [x] Фильтрация музыки:
  - [x] по артистам,
  - [x] по годам,
  - [x] по жанру
- [x] Сортировка песен по годам:
  - [x] по возрастанию,
  - [x] по убыванию,
  - [x] по умолчанию
- [x] По умолчанию плеер начинает играть первую песню из плейлиста
- [ ] Плеер проигрывает треки в соответствии с их порядком в плейлисте
- [x] Текущая песня сохраняются. После повторного входа на страницу можно продолжить прослушивание песни, проигрывавшейся перед выходом.
- [x] Список подборок/альбомов (танцевальные хиты, подборка дня и т.п.)
- [x] В каждой подборке отображается список треков, которые в нее входят
- [x] Страница профиля пользователя с возможностью изменить настройки/кастомизировать приложение/разлогиниться
- [x] При выходе из приложения настройки фильтрации, поиска, языковые настройки и настройки цвета удаляются

#### UI

- [x] Есть возможность управления приложением/игрой с клавиатуры, наличие hot keys:
  - [x] Управление плеером (когда на нем находится фокус)
    - [x] Пробел Play/Pause
    - [x] ← Перемотка назад
    - [x] → Перемотка вперед
    - [x] ↑ Увеличить громкость
    - [x] ↓ Уменьшить громкость
    - [x] L Переключение loop
    - [x] M Выключить/включить звук
- [x] Есть возможность переключения нескольких языков
- [ ] Есть модальный диалог
- [x] Реализация routing (без перезагрузки страницы приложения)
- [x] Возможность кастомизации приложения пользователем:
  - [x] Выбор цвета текста
  - [x] Выбор цвета фона
  - [x] Выбор цвета кнопок и оформления
  - [x] Выбор одного из трех языков (русский, английский, белорусский)
- [x] Реализация анимации при проигрывании музыки, для создания которой используются ключевые кадры
- [x] Приложение выполнено в едином стиле
- [x] Приложение работает на телефоне/планшете/PC:
  - [x] 1440px <= width
  - [x] 1200px <= width <= 1439px
  - [x] 768px <= width < 1200px
  - [x] 550px <= width < 768px
  - [x] 320px <= width < 550px

#### Технический стек приложения

- [x] Работа с Audio API
- [ ] Реализация Unit тестов (фреймворк Jest)
- [x] Сохранение и загрузка данных с использованием Local storage:
  - [x] сохранение текущей песни
  - [x] сохранение цветовых настроек
  - [x] сохранение языковых настроек
  - [x] при нажатии на кнопку "Выход" данные из LocalStorage стираются
- [ ] При повторном входе того же пользователя настройки цвета, языка и избранные треки восстанавливаются с использованием бекенда
- [x] Использование React + Redux
- [x] Использование React Router DOM
- [x] Использование MaterialUI
- [x] Использование react-DnD
- [x] Использование TypeScript
- [x] Использование MongoDB
