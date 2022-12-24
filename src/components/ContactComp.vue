<template>
  <div class="content-info__upper flow content-contact">
    <h1 class="type-display">Contact</h1>
    <p>Send me a message, and I will get back to you within 24 hours.</p>
    <div>
      <form @submit.prevent="handleSubmit" class="form-container grid">
        <div class="form-input" :class="{ error: v$.name.$errors.length }">
          <label for="name">
            <span>Name:</span>
            <input type="text" id="name" name="name" v-model.lazy="state.name" />
          </label>
        </div>
        <div class="form-input" :class="{ error: v$.email.$errors.length }">
          <label for="email">
            <span>Email:</span>
            <input type="email" id="email" name="email" v-model.lazy="state.email" />
          </label>
        </div>
        <div class="form-input" :class="{ error: v$.message.$errors.length }">
          <label for="message">
            <span>Message:</span>
          </label>
          <textarea name="message" id="message" v-model.lazy="state.message"></textarea>
        </div>

        <button
          :class="{ green: sentSuccess, error: sentFail, pending: sentPending }"
          class="btnSubmit"
          v-if="showSendBtn"
        >
          <span v-if="!sentSuccess">{{ sentPending ? '...' : 'Send' }}</span>
          <span v-if="sentSuccess && !sentPending">Done!</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
  import { reactive, ref, watch, watchEffect } from 'vue'
  import { required, email, minLength, maxLength } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'
  import { computed } from '@vue/reactivity'
  import sendEmail from '../composables/sendEmail'

  const showSendBtn = ref(false)
  const sentPending = ref(false)
  const sentSuccess = ref(false)
  const sentFail = ref(false)

  const state = reactive({
    name: '',
    email: '',
    message: '',
  })

  const rules = computed(() => {
    return {
      name: { required, minLength: minLength(3), maxLength: maxLength(20) },
      email: { required, email, $lazy: true },
      message: { required, minLength: minLength(3), maxLength: maxLength(200) },
    }
  })

  const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true })

  watch(
    () => v$.value,
    () => {
      if (v$.value.$dirty && !v$.value.$invalid) {
        showSendBtn.value = true
      }
    }
  )

  const handleSubmit = async () => {
    const result = await v$.value.$validate()

    sentPending.value = true

    if (result) {
      const sent = await sendEmail(state)
      if (sent) {
        sentPending.value = false
        sentSuccess.value = true

        setTimeout(() => {
          sentSuccess.value = false
          showSendBtn.value = false
        }, 8000)
      } else {
        sentPending.value = false
        sentFail.value = true

        state.email = ''
        state.name = ''
        state.message = ''

        setTimeout(() => {
          sentFail.value = false
          showSendBtn.value = false
        }, 10000)
      }
    }
  }
</script>
