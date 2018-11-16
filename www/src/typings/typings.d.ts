interface ICallNumber {
    callNumber: (success: (result: string) => any, failure: (result: any) => any, number: string | number, bypassAppChooser?: boolean) => void
}

interface IBackgroundMode {
    enable(): void,
    disable(): void,
    setEnabled(enable: boolean): void,
    getDefaults(): object,
    getSettings(): object,
    setDefaults(overrides: object): void,
    configure(options: object): void,
    disableWebViewOptimizations(): void,
    moveToBackground(): void,
    moveToForeground(): void,
    excludeFromTaskList(): void,
    overrideBackButton(): void,
    isScreenOff(callback: () => void): void,
    wakeUp(): void,
    unlock(): void,
    isEnabled(): boolean,
    isActive(): boolean,
    fireEvent(event: string, ...args: object[]),
    on(event: string, callback: (event?: object) => void, scope?: object),
    un(event: string, callback: (event?: object) => void),
    onactivate: () => void,
    ondeactivate: () => void,
    onfailure: () => void
}

declare interface Window {
    plugins: {
        CallNumber: ICallNumber
    },
    cordova: {
        plugins: {
            backgroundMode: IBackgroundMode,
            notification: any
        }
    }
}