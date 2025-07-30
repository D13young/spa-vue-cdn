const AboutPage = {
  template: `
    <div>
      <h1 class="page-title">О нашем проекте</h1>
      
      <div class="about-content">
        <div class="about-text">
          <p>Добро пожаловать на страницу "О нас"! Это демо приложение создано для изучения 
          возможностей Vue Router и создания одностраничных приложений (SPA) на Vue.js.</p>
          
          <p>Vue Router — это официальная библиотека маршрутизации для Vue.js. Она тесно 
          интегрирована с ядром Vue.js, что позволяет легко создавать сложные одностраничные 
          приложения с вложенными маршрутами, динамической загрузкой компонентов и многим другим.</p>
          
          <p>С помощью Vue Router вы можете создавать приложения с несколькими "страницами" без 
          перезагрузки браузера, что обеспечивает плавный пользовательский интерфейс.</p>
        </div>
        
        <div class="about-image">
          Vue Router
        </div>
      </div>
      
      <div class="team">
        <h2>Наша команда</h2>
        <div class="team-members">
          <div class="team-member">
            <div class="member-avatar">IS</div>
            <h3>Илья Соболев</h3>
            <p>Frontend Developer</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">TB</div>
            <h3>Тимур Батруинов</h3>
            <p>UX Designer</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">GH</div>
            <h3>Гарик Харламов</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  `
};