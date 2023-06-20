import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/primevue.min.css '
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import InputText from 'primevue/inputtext';
import Image from 'primevue/image';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';


const app = createApp(App);

app.use(PrimeVue);
app.component('Image',Image);
app.component('Button', Button);
app.component('InputText', InputText)
app.component('Textarea', Textarea)

app.mount('#app')


