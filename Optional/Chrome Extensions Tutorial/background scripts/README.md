
Фоновая страница выполняется в отдельном процессе



## Инициализация расширения

Прослушка(т.е назначение обработчика на) события runtime.onInstalled позволяет инициализировать расширение на момент установки. 
Используйте его, чтобы назначить/установить состояние или для однократной(может первичной?) инициализации, например [контекстного меню]():


```javascript
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });
```

## Назначить обработчики
разобраться с асинхронностью

Структура фоновых скриптов построена вокруг событий, от которых зависит расширение. 
Определение функционально релевантных событий позволяет фоновым скриптам бездействовать до тех пор, пока эти события не будут запущены, и не позволит расширению пропустить 
важные триггеры.


```javascript
  chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });

  // Оработчик сработает, когда будет создана новая вкладка
  chrome.bookmarks.onCreated.addListener(function() {
    // ...
  });
```

# Фильтрация событий

Используйте те API, которые поддерживают фильтрацию событий, чтобы обработчик срабатывал только в тех случаях, когда это действительно нужно.