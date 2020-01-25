// Import MoxyApp
import { MoxyApp } from './lib/App'

// Load configuration
const config = require('./lib/config.json')

// Global View
const globalView = {
    metaData: {
        description: 'MoxyScript is a light weight framework in NodeJS',
        title: 'Moxy Script',
        ogImage: 'https://www.site.com/thumbnail.jpg',
    },
}

// Pass config into MoxyApp
const app = new MoxyApp(config, globalView)

// Start the app
app.run()
