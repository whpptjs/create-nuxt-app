<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        <%= name %>
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          This will be a WhpptJS app
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<%_ if (typescript) { _%>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<%_ } else { _%>
<script>
export default {}
</script>
<%_ } _%>
