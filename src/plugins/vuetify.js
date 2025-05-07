import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    defaults: {
        VTextField: {
            variant: 'underlined',
            density: 'compact',
        },
        VBtn: {
            class: 'text-capitalize',
            rounded: 'pill',
        }
    }
});

export default vuetify;
