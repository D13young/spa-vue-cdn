const { createApp } = Vue;

const app = createApp({});

app.component('nav-bar', NavBar);
app.component('app-footer', Footer);

app.use(router);

app.mount('#app');