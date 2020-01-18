import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'

/**
 * Custom JS components/controllers powered by Stimulus
 */
import HelloController from './controllers/hello_controller'

/**
 * Init Simulus library
 */
const application = Application.start()

/**
 * Register Stimulus components/Controllers
 */
application.register('hello', HelloController)

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()
