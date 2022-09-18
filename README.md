# Binerals

## Структура и данные

Структура проекта определенна согдасно рекомендациям next.js
Основные деректории и соглашения

- `components` - React компоненты (!! components/Icons автогенирируемая, смотри раздел Иконки)
- `datastore` - папка с конфигами для компонентов, при переходе на запрос данных с рервера может быть полностью удалена.
  соглашения по именованию файлов `<Имя_Компонента>_<описание>`
- `layouts` - React компоненты реализовывающие функционал layout-ов
- `lib` - утилиты и библиотеки необходимы для работы приложения
- `pages` - основаня папка с роутигром
- `public` - папка с публичными рессурсами

## Лейаут

По умолчанию все страницы грузятся в `DefaultAppLayout`, он обеспечивает отрисовку базовых элементов таких как хедер и футер на каждой из страниц.
В случае если лейаут по умолчанию не подходит его всегда можно заменить своим кастомынм. Для этого достаточно поисать свой лейаут по анолоигии с дефолтным, и прописать его как свойство наужной страницы

```js
import MyCustomLayout from "layouts/MyCustomLayout"

const MyPage = (props)  => { ... }

MyPage.layout = MyCustomLayout

export default MyPage
```

## Попапы

Работа с попапами очень схожа с работой лейаутов.

> **Важно!** Все попапы находятся в папке `components/Popup`

Сигнатура попап компонета

```js
import PopupLayout from "layouts/PopupLayout"

const MyComponent = (props) => { ... }

const MyComponentPopup = ({ isShown, onClose }) => (
  <PopupLayout isVisible={isShown} closePopup={onClose}>
    <MyComponent />
  </PopupLayout>
)

export default MyComponentPopup
```

`PopupLayout` не имеет своего внутренего состояни, потому ему требуется пропсы состояния из внешнего компонента

```js
import { useState } from "react";

import PopupLayout from "components/Popup/MyComponentPopup";

const MyPage = (props) => {
  const [isShowPopup, useIsShowPopup] = useState(false);

  return (
    <>
      <input type="button" onClick={() => useIsShowPopup(true)}>
        Open Popup
      </input>
      <PopupBecomePartner
        isShown={isShowPopup}
        onClose={() => {
          useIsShowPopup(false);
        }}
      />
    </>
  );
};

export default MyPage;
```

## Иконки

Все иконки предоставляются через компонент `Icons`. Для доступа к ним достаточно импортировать необходимую иконку и использовать ее как компонент

```jsx
import Icons from "components/Icons";
// так же альтернативно:
// import GitHub from "components/Icons/GitHub"
// import {GitHub} from "components/Icons"

const MyComponent = (props) => {
  return <Icons.GitHub />;
};
```

> **Важно!** по умолчанию все иконки имеют размер `{width: 1em, height: 1em}` переопределить размры можно переопределение `width` и `height`:
>
> ```jsx
> <GitHub width={50} height={50} />
> ```

### Попонение коллекции иконок

Все исходники иконок хранятся в `public/Icons/` что дает возможность использовать их как изображения `.svg`

```js
<img src="/Icons/GinHub.svg" />
```

На основании этих иконок формируются соответствующие jsx компоненты **автоматически!** Для этого, после добавления/изминения/удаления иконки запкстить в консоле скрипт

```sh
$ yarn icon-update
```

> **Важно!** Вложенные папки в `public/icons` будут вормировать вложенные компоненты для `Icons`.
> Также в момент автоматической генирации иконок файлы переименовуются в "кемел-кэйс"
>
> ```jsx
> import Icons from "components/Icons";
> import TechnologyIcons from "components/Icons/technology";
> ```
>
> Детальнее про автогенирацию https://react-svgr.com

## Сборка и деплоймент

Для сборки приложения в режиме `prod`

```sh
yarn build
```

После выполнения сборки, next.js сформирует отчет по каждой странице, по нему удобно анализировать размеры и быстродействие разных страниц

```sh
                          Size     First Load JS
 ● / (ISR: 3600 Seconds)  11.3 kB         119 kB
```

здесь вы можете контролировать тип страницы

λ - страница с SSR, самые медленные страницы, так как при заждом запросе на сервере будет проходить рендеринг

● - страницы с SSG, это страницы которые закешированы но используют динмические данные, могут иметь параметр ISR - это время в секундах как часто эти странцы будут обновляться на сервере

○ - статические страницы, это самые быстрые страницы так как они отдаются на клиет как сформированный статический файл из кеша
