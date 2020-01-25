export class MoxyController {
    public constructor(config: any, app: any, request: string) {
        // Stub class that our other controllers implement
    }
    public getView(): TMoxyView {
        return ''
    }
    public getModel(): IMoxyModel {
        return {}
    }
}

export interface IMoxyModel { [key: string]: any }
export type TMoxyView = string
