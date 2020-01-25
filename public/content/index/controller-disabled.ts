import { IMoxyModel, MoxyController, TMoxyView } from '../../../lib/MoxyController'

// Sample controller - if named controller, it will override the default controller.
// We can provide sub routes and views here as needed.
export class PageController implements MoxyController {
    private _app: any = null
    private _config: any = null
    private _request: string

    constructor(config: any, app: any, request: string) {
        this._app = app
        this._config = config
        this._request = request
    }

    public getView(): TMoxyView {
        return ''
    }

    public getModel(): IMoxyModel {
        return {}
    }
}
