<template>
    <div class="grid-container">
      <!-- Giới hạn số lượng phần tử hiển thị bằng cách sử dụng prop maxItems -->
      <slot v-for="(_, index) in limitedItems" :key="index" :index="index"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GridDisplay',
    props: {
      maxItems: {
        type: Number,
        default: 9 // Số mặc định là 9, có thể thay đổi theo nhu cầu
      }
    },
    computed: {
      limitedItems() {
        return Array.from({ length: this.maxItems });
      }
    }
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  </style>
  