<template>
  <div class="fixed left-0 top-0 h-screen p-4 m-4 bg-white w-64 rounded-lg"> <!-- Added m-4 for margin -->
    <div class="rounded-lg p-4">
      <h2 class="text-lg font-bold mb-4">Category</h2>
      <div class="flex flex-col space-y-2">
        <button v-for="category in categories" :key="category" :id="category" :class="[
          'category-btn',
          selectedCategory === category ? 'bg-blue-500 text-white' : 'text-gray-800',
          'px-4 py-2 rounded'
        ]" @click="selectCategory(category)">
          {{ category }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'All',
        'Facebook',
        'Twitter',
        'Google',
        'Instagram',
        'Amazon',
        'Ebay',
        'Crawl',
        'Retail',
        'Airdrop',
        'Discord',
        'Zalo'
      ],
      selectedCategory: null,
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
.category-btn {
  transition: background-color 0.3s, color 0.3s;
}
</style>
