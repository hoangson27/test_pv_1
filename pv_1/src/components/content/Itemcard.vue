<template>
  <div class="item-card border border-gray-300 rounded-lg p-4 shadow-lg">
    <!-- Block 1: Logo, Title, CreatedBy, Download Button -->
    <div class="flex items-center mb-4">
      <div class="logo-container flex-shrink-0 mr-4">
        <!-- Logo adjusted to square shape -->
        <img :src="logo" alt="Logo" class="h-16 w-16 object-cover" />
      </div>
      <div class="flex-1">
        <!-- Reduced font size for title -->
        <h2 class="text-xs font-semibold">{{ title }}</h2>
        <!-- Reduced font size for createdBy -->
        <p class="text-xs text-gray-500">
  Created by: <span class="text-blue-500 font-sm">{{ createdBy }}</span>
</p>

      </div>
      <button
        @click="downloadItem"
        class="ml-auto w-7 h-7 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs flex items-center justify-center"
      >
        <!-- Smaller icon size for download -->
        <font-awesome-icon :icon="['fas', 'download']" />
      </button>
    </div>

    <!-- Block 2: Description -->
    <div class="mb-4">
      <p class="text-gray-700">{{ description }}</p>
    </div>

    <!-- Block 3: Post Date -->
    <div class="mb-4">
      <span class="text-sm text-gray-600">
        <i class="fas fa-calendar-alt"></i> {{ postDate }}
      </span>
    </div>

    <!-- Block 4: Views, Downloads, Rating, Price -->
    <div class="border-t border-gray-300 my-4"></div> <!-- Đường kẻ ngang -->

    <div class="meta-info flex items-center justify-between text-sm text-gray-600">
      <div class="flex items-center space-x-4">
        <span>
          <font-awesome-icon :icon="['fas', 'eye']" /> {{ views }}
        </span>
        <span>
          <font-awesome-icon :icon="['fas', 'download']" /> {{ downloads }}
        </span>
        <span>
          <font-awesome-icon :icon="['fas', 'star']" /> {{ rating }}
        </span>
      </div>
      <div>
        <span
          :class="[
            'px-3 py-1 rounded-full',
            price === 'Free'
              ? 'bg-green-100 text-green-700'
              : 'bg-blue-100 text-blue-700',
          ]"
        >
          {{ price }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postDate: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    downloads: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  methods: {
    downloadItem() {
      // Implement download logic here
      console.log('Download button clicked!');
      // For example, redirect to download URL or trigger file download
    },
  },
};
</script>

<style scoped>
.item-card {
  background-color: white; /* Add white background */
  transition: transform 0.3s, box-shadow 0.3s;
}
.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
