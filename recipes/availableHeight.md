# Розрахунок доступної висоти у шаблоні

Для вирішення задачі використовуємо composable function ./src/composables/useAvailableHeight.js

### Впровадження
* Імпортуємо та використовуємо useAvailableHeight.
* Прив'язуємо обчислену висоту до стилів елемента, який має мати максимальну висоту.

```vue
<template>
  <v-container>
    <v-row>
      <v-col>
        <div :style="{ height: `${availableHeight}px` }">
          <!-- Вміст компоненту, який має мати максимальну доступну висоту враховуючи шаблон vuetify -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAvailableHeight } from './useAvailableHeight'

export default {
  setup() {
    const { availableHeight } = useAvailableHeight()

    return {
      availableHeight,
    }
  },
}
</script>

<style scoped>
/* Додаткові стилі за потреби */
</style>
```