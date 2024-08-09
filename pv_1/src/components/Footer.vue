<template>
  <div class="p-4 border border-gray-300 rounded-md flex flex-col items-center bg-white w-full mx-2 my-4 pt-2.5 pb-2.5">
    <div class="flex items-center justify-center space-x-4  ">
  <!-- Reduced m-1 for smaller margin -->
  <select id="data-count" v-model="rowsPerPage" class="border border-gray-300 rounded px-2 py-1 m-1">
    <option v-for="option in rowsOptions" :key="option" :value="option">
      {{ option }}/Page
    </option>
  </select>
  <div class="flex items-center space-x-2">
    <!-- Reduced m-1 for smaller margin -->
    <button :disabled="currentPage === 1" @click="previousPage"
      class="px-2 py-2 border border-gray-300 rounded-md disabled:opacity-50 m-1">
      &lt;
    </button>
    <div class="flex space-x-1 m-1">
      <button v-for="page in visiblePages" :key="page" :class="[
        'page-btn',
        currentPage === page
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-800',
        'w-10 h-10 flex items-center justify-center rounded-md'
      ]" @click="goToPage(page)">
        {{ page }}
      </button>
    </div>
    <!-- Reduced m-1 for smaller margin -->
    <button :disabled="currentPage === totalPages" @click="nextPage"
      class="px-2 py-2 border border-gray-300 rounded-md disabled:opacity-50 m-1">
      &gt;
    </button>
  </div>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      rowsPerPage: 10,
      currentPage: 1,
      totalRows: 100, // Assumed total number of data rows
      rowsOptions: [5, 10, 20, 50, 100],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalRows / this.rowsPerPage);
    },
    visiblePages() {
      let startPage = Math.max(1, this.currentPage - 1);
      let endPage = Math.min(this.totalPages, this.currentPage + 1);

      // Ensure always showing 3 pages
      if (endPage - startPage < 2) {
        endPage = Math.min(startPage + 2, this.totalPages);
        startPage = Math.max(endPage - 2, 1);
      }

      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
  watch: {
    rowsPerPage() {
      this.currentPage = 1; // Reset the current page when changing rows per page
    },
  },
};
</script>

<style scoped>
.page-btn {
  transition: background-color 0.3s, color 0.3s;
}

.disabled\:opacity-50 {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
