export class Feature {

    protected _version = '1.0.0';
    protected _enabled = false;

    get enabled (): boolean {

        return this._enabled;
    }

    get version (): string {

        return this._version;
    }

    constructor (enable?: boolean) {

        this._enabled = !!enable;
    }

    async action (): Promise<void> {

        if (!this.enabled) {

            throw new Error('Feature is not enabled.');
        }

        await Promise.resolve();
    }
}
