<template>
    <div class="p-4 border border-gray-300 rounded-md flex flex-col items-center bg-white w-full mx-4 my-6">
      <div class="flex items-center justify-center space-x-4 mb-4">
        <select
          id="data-count"
          v-model="rowsPerPage"
          class="border border-gray-300 rounded px-2 py-1"
        >
          <option v-for="option in rowsOptions" :key="option" :value="option">
            {{ option }}/Page
          </option>
        </select>
        <div class="flex items-center space-x-2">
          <button
            :disabled="currentPage === 1"
            @click="previousPage"
            class="px-2 py-2 border border-gray-300 rounded-md disabled:opacity-50"
          >
            &lt;
          </button>
          <button
            v-for="page in visiblePages"
            :key="page"
            :class="[
              'page-btn',
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800',
              'w-10 h-10 flex items-center justify-center rounded-md'
            ]"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button
            :disabled="currentPage === totalPages"
            @click="nextPage"
            class="px-2 py-2 border border-gray-300 rounded-md disabled:opacity-50"
          >
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
        totalRows: 100, // Giả định tổng số dòng dữ liệu
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
  
        // Đảm bảo luôn hiển thị 3 trang
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
        this.currentPage = 1; // Reset lại trang hiện tại khi thay đổi số dòng mỗi trang
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
  