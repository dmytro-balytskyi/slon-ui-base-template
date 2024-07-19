# Використання ErrorBoundary компонента
Для ізоляції проблемного коду використовуйте компонент @/components/ErrorBoundary.vue

## Використання

Щоб використовувати цей компонент, просто оберніть будь-який інший компонент, який може згенерувати помилку. Помилки, що виникають у дочірніх компонентах, будуть автоматично передаватися до `ErrorBoundary` компонента.

```html
<ErrorBoundary>
  <ImUnstable />
</ErrorBoundary>
```

```html
<ErrorBoundary>
  <template #fallback="{ hasError, error, info}">
    <YourFallback />
  </template>
  <ImUnstable />
</ErrorBoundary>
```

Якщо використовуєте його всередині `v-for`, переконайтеся, що у вашому компоненті `ErrorBoundary` встановлений prop `stop-propagation`.

```html
<div v-for="...">
  <ErrorBoundary stop-propagation>
    ...
  </ErrorBoundary>
</div>
```

## Props

| Attribute        | Description  | Type | Required | Default |
|------------------|--------------|------|----------|---------|
| on-error         | Callback function to perform on error. | `Function`  | `false`  | `null` |
| stop-propagation | Stop propagation of errors to other `errorCaptured` hooks. | `boolean` | `false` | `true` |

## Scoped Slot #fallback

По замовчуванню рендерить 
```html
<v-alert class="text-medium-emphasis" text="Не вдалось завантажити компонент" />
```

| Property | Description | Type    |
|----------|-------------|---------|
| error    | The error   | `Error` |
| hasError | Whether an error occurred. | `boolean` |
| info     | Information on where the error was captured | `string` |

## Events

### Callbacks on-error

`ErrorBoundary` може отримувати функцію зворотного виклику через `on-error` prop.

```html
<template>
  <ErrorBoundary :on-error="handleError">...</ErrorBoundary>
<template>

<script>
// ...
methods: {
  handleError (err, vm, info) {
    // do something
  }
}
// ...
</script>
```

### @errorCaptured event

Ми можемо отримути аргументи які відловив хук `errorCaptured` компонента `ErrorBoundary`.

```html
<template>
  <ErrorBoundary @error-captured="handleError">...</ErrorBoundary>
</template>

<script>
// ...
methods: {
  handleError (err, vm, info) {
    // do something
  }
}
// ...
</script>
```