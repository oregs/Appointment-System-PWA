<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button @click="showAlert" type="button" class="bg-red-700">Test SweetAlert</button>

  </div>
</template>

<script>

export default {
  "name": "Test",
  data() {
    return {
    }
  },
  async created() {
  },
  methods: {
    showAlert() {
      console.log('Inside the sweet alert call');
      // Use sweetalert2
      this.$swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    },
  }
}
</script>