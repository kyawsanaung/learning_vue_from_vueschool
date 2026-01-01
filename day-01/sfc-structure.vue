<template>
    <div>
        <h1>{{  message  }}</h1>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('Hello, Vue 3!');
function changeMessage() {
    message.value = 'Reactivity came off';
}
</script>

<style scoped>
h1 {
  color: #42b883;
}
</style>
