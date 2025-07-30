const NavBar = {
  template: `
    <nav class="navbar">
      <router-link to="/" class="logo">
        <i class="fas fa-cube"></i>
        VueRouter SPA
      </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">Главная</router-link>
        <router-link to="/about" class="nav-link" active-class="active">О нас</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Контакты</router-link>
        <router-link to="/user/123" class="nav-link" active-class="active">Профиль</router-link>
      </div>
    </nav>
  `
};