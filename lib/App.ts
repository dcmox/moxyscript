import { IMoxyModel, TMoxyView } from './MoxyController'

const fs = require('fs')
const express = require('express')
const app = express()

const Stencil = require('@dcmox/stencil-js')

export class MoxyApp {
    private _config: any = null
    private _publicPath: string = ''
    private _baseModel: any
    constructor(config: any, baseModel: any = null) {
        this._config = config
        this._publicPath = `${process.cwd()}/${config.publicDir}`
        this._baseModel = baseModel
    }

    // Assets are loaded without middleware
    public configureAssets(): void {
        app.get(this._config.route.assets, (req: any, res: any) => {
            const file: string = `${this._publicPath}/${req.originalUrl}`
            res.sendFile(file)
        })
    }

    public route(): void {
        app.get('*', (req: any, res: any) => {
            const path: string = req.path === '/' ? 'index' : req.path.slice(1)

            const controller: string =  `${this._publicPath}/${this._config.contentDir}/${path}/controller.js`
            let model: IMoxyModel = {}
            let view: TMoxyView = ''

            // Check for existence of sub-controller
            if (fs.existsSync(controller)) {
                const PageController = require(controller).PageController
                const pageController = new PageController(this._config, app, req)

                model = pageController.getModel()
                view = pageController.getView()
            } else { // Otherwise load our default controller
                const PageController = require('./DefaultPageController').DefaultPageController
                const pageController = new PageController(this._config, app, req)

                model = pageController.getModel()
                view = pageController.getView()
            }

            // Attach our model to our base/global model
            model = Object.assign(this._baseModel, model)
            const rendered: string = Stencil.render(view, model)
            res.send(rendered)
        })
    }

    public listen(): void {
        app.listen(this._config.port, () => {
            console.log(`MoxyApp listening on port ${this._config.port}!`)
        })
    }

    public run(): void {
        // Define assets route
        this.configureAssets()

        // Default router
        this.route()

        // Starts listening for requests
        this.listen()
    }
}
