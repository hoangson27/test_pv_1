import { createApp } from 'vue';
import App from './App.vue'; // Import App.vue chính xác
import './assets/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faDownload, faStar, faSearch, faSync } from '@fortawesome/free-solid-svg-icons';

// Thêm các icon vào thư viện
library.add(faEye, faDownload, faStar, faSearch, faSync);

// Tạo ứng dụng
const app = createApp(App);

// Đăng ký FontAwesomeIcon là một component toàn cục
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount ứng dụng
app.mount('#app');
