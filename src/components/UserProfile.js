const UserProfile = {
  props: ['id'],
  setup(props) {
    const user = Vue.ref({
      id: props.id,
      name: 'Иван Иванов',
      email: `user${props.id}@example.com`,
      joined: '2020-05-15',
      activity: 42
    });
    
    const stats = Vue.ref([
      { title: 'Проекты', value: 12, icon: 'fas fa-project-diagram' },
      { title: 'Задачи', value: 87, icon: 'fas fa-tasks' },
      { title: 'Друзья', value: 24, icon: 'fas fa-user-friends' },
      { title: 'Очки', value: 3560, icon: 'fas fa-star' }
    ]);
    
    const activities = Vue.ref([
      { action: 'Завершил задачу', project: 'Проект Alpha', time: '2 часа назад' },
      { action: 'Добавил комментарий', project: 'Проект Beta', time: 'Вчера' },
      { action: 'Создал новую задачу', project: 'Проект Gamma', time: '2 дня назад' },
      { action: 'Обновил профиль', project: '', time: '3 дня назад' }
    ]);
    
    return {
      user,
      stats,
      activities
    };
  },
  template: `
    <div>
      <div class="profile-header">
        <div class="profile-avatar">
          {{ user.name.split(' ').map(n => n[0]).join('') }}
        </div>
        <h1>{{ user.name }}</h1>
        <p>{{ user.email }}</p>
        <div class="user-id">ID пользователя: {{ id }}</div>
      </div>
      
      <div class="profile-stats">
        <div class="stat-card" v-for="stat in stats" :key="stat.title">
          <i :class="stat.icon"></i>
          <div class="number">{{ stat.value }}</div>
          <h3>{{ stat.title }}</h3>
        </div>
      </div>
      
      <div class="recent-activity">
        <h2>Последняя активность</h2>
        
        <div class="activity-list">
          <div class="activity-item" v-for="(activity, index) in activities" :key="index">
            <div class="activity-icon">
              <i class="fas fa-history"></i>
            </div>
            <div class="activity-details">
              <h3>{{ activity.action }}</h3>
              <p v-if="activity.project">{{ activity.project }}</p>
              <p class="activity-time">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};