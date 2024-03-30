<template>
    <div class="caixa">
      <h2>Digital Watch</h2>
      <div class="watch">{{ currentTime }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: this.getCurrentTime(),
      };
    },
    mounted() {
      setInterval(() => {
        this.currentTime = this.getCurrentTime();
      }, 1000);
    },
    methods: {
      getCurrentTime() {
        const now = new Date();
        const hours = this.formatTime(now.getHours());
        const minutes = this.formatTime(now.getMinutes());
        const seconds = this.formatTime(now.getSeconds());
        return `${hours}:${minutes}:${seconds}`;
      },
      formatTime(time) {
        return time < 10 ? `0${time}` : time;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .watch {
    font-size: 56px;
    font-weight: bold;
    color: #333;
    background-color: #f0f0f0;
    padding: 30px; 
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
  }

  .caixa {
    max-width: 300px;
    margin: 0 auto;
  }

  </style>
  