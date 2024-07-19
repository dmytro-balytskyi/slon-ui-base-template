<script>
export default {
  name: 'ErrorBoundary',
  props: {
    stopPropagation: {
      type: Boolean,
      default: true
    },
    onError: {
      type: Function,
      default: () => {}
    }
  },
  emits: ['error-captured'],
  data() {
    return {
      error: null,
      errorMessage: ''
    }
  },
  computed: {
    hasError() {
      return Boolean(this.error)
    }
  },
  errorCaptured(error, vm, info) {
    this.error = error
    this.errorMessage = info

    this.$emit('error-captured', { error, vm, info })
    this.$props?.onError(error, vm, info)

    if (this.$props.stopPropagation) return false
  }
}
</script>

<template>
  <div v-if="error">
    <slot name="fallback" :hasError="hasError" :error="error" :info="errorMessage">
      <v-alert class="text-medium-emphasis" text="Не вдалось завантажити компонент" />
    </slot>
  </div>
  <div v-else><slot /></div>
</template>
