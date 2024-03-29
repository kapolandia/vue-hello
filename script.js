const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Hello Vue!',
      image: 'vuejs.png'
    }
  }
}).mount('#app')