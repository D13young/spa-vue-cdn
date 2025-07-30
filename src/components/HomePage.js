const HomePage = {
  template: `
    <div>
      <h1 class="page-title">Добро пожаловать!</h1>
      
      <div class="hero">
        <h1>Vue.js SPA с Vue Router</h1>
        <p>Это демо приложение показывает возможности Vue Router для создания одностраничных 
        приложений (SPA)</p>
        <router-link to="/about" class="btn">
          <i class="fas fa-info-circle"></i> Узнать больше
        </router-link>
      </div>
      
      <div class="features">
        <div class="feature-card">
          <i class="fas fa-bolt"></i>
          <h3>Быстрота</h3>
          <p>Vue.js обеспечивает высокую производительность и быструю загрузку приложений.</p>
        </div>
        
        <div class="feature-card">
          <i class="fas fa-cogs"></i>
          <h3>Гибкость</h3>
          <p>Легко настраиваемая архитектура позволяет создавать приложения любой сложности.</p>
        </div>
        
        <div class="feature-card">
          <i class="fas fa-rocket"></i>
          <h3>Современность</h3>
          <p>Используйте самые современные технологии веб-разработки в своих проектах.</p>
        </div>
      </div>
    </div>
  `
};