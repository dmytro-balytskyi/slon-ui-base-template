# Module Federation

Під час завантаження розподіленого коду, може виникнути ситуація коли ваш код не завантажується. Рекомендуємо обробляти таку ситуацію за допомогою FallBack компонентів.

## Віддалена сторінка

Приклад, не завантажується віддалена сторінка `shared/SharedView`, конфігурація vue-router

```js
const routes = [
  {
    name: 'shared',
    path: '/shared',
    component: () =>
      import('shared/SharedView').catch((error) => {
        return {
          render() {
            return h(VEmptyState, {
              icon: 'mdi-alert-circle-outline',
              headline: 'помилка',
              title: 'Сторінку не знайдено',
              text: 'Не вдалося завантажити сторінку SharedView',
              actionText: 'На головну',
              color: 'primary',
              'onClick:action': () => router.push({ name: 'main' })
            })
          }
        }
      })
  }
]
```

## Віддалений компонент

За допомогою рендер функції

```html
<script setup>
import { defineAsyncComponent, h } from 'vue'
import { VAlert } from 'vuetify/lib/components/index.mjs'

const CallsHistoryWidget = defineAsyncComponent(() =>
  import('shared/CallsHistoryWidget').catch(() => {
    return {
      render() {
        return h(VAlert, {
          title: 'Сталася помилка',
          text: 'Не вдалось завантажити компонент shared/CallsHistoryWidget',
          maxWidth: 320,
          closable: true
        })
      }
    }
  })
)
</script>

<template>
  <v-container class="d-flex" fluid>
    <CallsHistoryWidget />
  </v-container>
</template>
```

Якщо виготовили свій fallback компонент

```js
const CallsHistoryWidget = defineAsyncComponent(() =>
  import('shared/CallsHistoryWidget')
    .catch(() => import('@/components/SpecialFallback.vue'))
)
```