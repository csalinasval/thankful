import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'es': {
        content: 'Contenido',
        contentPlaceholder: 'Me siento agradecido a causa de …',
        save: 'Guardar',
        emptyContentError: 'Debes escribir algo antes de guardar',
        feelingGratefulTitle: 'Hoy me siento agradecido a causa de ',
        noContentTitle: 'Aun no has anotado nada'
    },
    'en': {
        content: 'Content',
        contentPlaceholder: 'I am feeling grateful because of …',
        save: 'Save',
        emptyContentError: 'You should write something before save',
        feelingGratefulTitle: 'Today i am feeling grateful because ',
        noContentTitle: 'You still have not written anything'
    }
};

const i18n = new VueI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;