Реакт - библиотнка использующаяся для формирования структуры проэкта.
Реакт формирует структуру проэкта с помощю компонентов.
Компоненты представлены двумя способами: функциональные компоненты, классовые компоненты.
И те и другие возвращают JSX разметку.
JSX это JavaScript Sintax Extention, синтаксичесское выражение JavaScript объектов которые преобразовываються в HTML тэги для браузеров.
Все компоненты отображают контент(текст, картинки и тд).
Так как контент в компонетнтах может меняться мы его подставляем динамичесски(через {}).
Компоненты могут хранить данные о контенте в своём локальном стэйте или получать его через объект this.props от родительских компонентов или глобального стэйта.
Глобальный стэйт реализуеться с помощю библиотек (ReactRedux и тп).
Когда компоненты получают данные через this.props, такие данные нужно проверять по типу.
Это реализуеться с помощю библиотеки PropTypes.
Если есть вероятность что компонент может  не получить какие-то данные, мы указываем значение по умолчанию через свойства DefaultProps.

ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
Малого и среднего размера приложения создаються с командой
```npx create-react-app .```
Создаётся структура одностраничного Single Page Aplication.
Многостраничность приложению обеспечивает библиотека React-Router.
Независимо от того какое приложение мы делаем, все компоненты храняться в папке Components.
Компоненты страниц вносяться в папку Pages.
Для реализации глобального стэйта код храниться в папке Redux.
Изображения хранятся в папке Images.
Вся эта структура папочек размещается внутри папки Src.

Классовый компонент ещё считаеться умным компонентом потому что отличаеться от функционального компонента наличием локального стэйта и методов жизненных циклов: componentDidMount, componentDidUpdate, componentWillUnmount.

ХУКИ
Нововведение в Реакт с версии 16.8
Хуки позволяют реализовывать в простых функциональных компонентах локальный стэйт через useState а методы жизненных циклов через useEffect.
