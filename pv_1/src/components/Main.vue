<template>

  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div>
      <Menu />
    </div>
    <div>
      <div class="m-4"> <!-- Added m-4 for margin -->
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold mb-4">Gemlogin Mini-App Store</h1>
          <p>Enhance all your operations effortlessly using Gemlogin's comprehensive suite of automation tools.</p>
        </div>



        <div class="flex items-center space-x-4 justify-center">
          <!-- Search Input with Icon -->
          <div class="relative">
            <input type="text" placeholder="Search..." v-model="searchQuery"
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <font-awesome-icon :icon="['fas', 'search']" />
            </span>
          </div>

          <!-- Sort Options -->
          <select v-model="sortOption"
            class="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled value="">Sort by</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
            <option value="popularity">Popularity</option>
          </select>

          <!-- Reset Button -->
          <button @click="resetFilters"
            class="flex items-center space-x-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            <font-awesome-icon :icon="['fas', 'sync']" />
          </button>
        </div>
      </div>

      <div class="overflow-x-auto h-[500px]">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
          <!-- Loop through each item in the data array -->
          <Itemcard v-for="(item, index) in data" :key="index" :logo="item.logo" :title="item.title"
            :createdBy="item.createdBy" :description="item.description" :postDate="item.postDate" :views="item.views"
            :downloads="item.downloads" :rating="item.rating" :price="item.price" />
        </div>
      </div>


      <div>
        <Footer />
      </div>
    </div>

  </div>



</template>

<script>
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
import Itemcard from '../components/content/Itemcard.vue';
import data from '../data.json'; // Import JSON data


export default {
  components: {
    Menu,
    Footer,
    Itemcard,
  },
  data() {
    return {
      searchQuery: '',
      sortOption: '',
      data: data, // Initialize data from imported JSON
    };
  },
  methods: {
    resetFilters() {
      this.searchQuery = '';
      this.sortOption = '';
    },
  },
};
</script>

<style scoped>
/* No additional CSS is required since Tailwind CSS handles all styling */
</style>