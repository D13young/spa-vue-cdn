const ContactPage = {
  setup() {
    const formData = Vue.ref({
      name: '',
      email: '',
      message: ''
    });
    
    const submitForm = () => {
      alert('Форма отправлена!');
      formData.value = { name: '', email: '', message: '' };
    };
    
    return {
      formData,
      submitForm
    };
  },
  template: `
    <div>
      <h1 class="page-title">Свяжитесь с нами</h1>
      
      <div class="contact-container">
        <div class="contact-info">
          <h3>Контактная информация</h3>
          
          <div class="contact-detail">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h4>Адрес</h4>
              <p>г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
          
          <div class="contact-detail">
            <i class="fas fa-phone"></i>
            <div>
              <h4>Телефон</h4>
              <p>+7 (495) 123-45-67</p>
            </div>
          </div>
          
          <div class="contact-detail">
            <i class="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>contact@example.com</p>
            </div>
          </div>
          
          <div class="contact-detail">
            <i class="fas fa-clock"></i>
            <div>
              <h4>Часы работы</h4>
              <p>Пн-Пт: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h3>Форма обратной связи</h3>
          
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Ваше имя</label>
              <input 
                type="text" 
                id="name" 
                class="form-control" 
                v-model="formData.name"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                class="form-control" 
                v-model="formData.email"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="message">Сообщение</label>
              <textarea 
                id="message" 
                class="form-control" 
                v-model="formData.message"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="btn">
              <i class="fas fa-paper-plane"></i> Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </div>
  `
};