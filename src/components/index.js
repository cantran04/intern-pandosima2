// src/components/index.js
import Header from './header/Header.vue';
import Sidebar from './sidebar/Sidebar.vue';
import UserItem from './userItem/UserItem.vue';
import Button from './button/Button.vue';

//Global Registration

export default {
  register(app) {
    app.component("Header", Header);
    app.component("Sidebar", Sidebar);
    app.component("UserItem", UserItem);
    app.component("Button", Button);
    // Đăng ký thêm các components khác nếu cần
  }
};
