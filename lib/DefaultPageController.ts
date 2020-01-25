import { IMoxyModel, MoxyController, TMoxyView } from './MoxyController'

const fs = require('fs')

// Default Page Controller
export class DefaultPageController implements MoxyController {
    private _app: any = null
    private _config: any = null
    private _request: any
    private _publicPath: string

    constructor(config: any, app: any, request: any) {
       this._app = app
       this._config = config
       this._request = request
       this._publicPath = `${process.cwd()}/${this._config.publicDir}`
    }

    // Gets the layout
    public getView(): TMoxyView {
        return fs.readFileSync(`${this._publicPath}/layout/layout.tpl`).toString()
    }

    // Our data model contains a sub-view
    public getModel(): IMoxyModel {
        const path: string = this._request.path === '/' ? 'index' : this._request.path.slice(1)

        let template: string =  `${this._publicPath}/${this._config.contentDir}/${path}/view.tpl`

        if (!fs.existsSync(template)) {
            template = `${this._publicPath}/${this._config.contentDir}/404/view.tpl`
        }

        const page: TMoxyView = fs.readFileSync(template).toString()

        const model = {
            isActive(path: string): string { return path === this.path ? 'class="active"' : '' },
            path,
            subPage: page,
        }
        return model
    }
}