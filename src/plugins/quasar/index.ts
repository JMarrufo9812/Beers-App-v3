// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
// Import Quasar plugins
import { Notify } from 'quasar'
// Import Quasar css
import 'quasar/src/css/index.sass'

export const options = {
  plugins: {
    Notify,
  },
  config: {
    notify: {},
  },
}
