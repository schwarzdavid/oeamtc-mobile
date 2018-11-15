type ICallCallback = (result: any) => any;

declare interface Window {
    plugins: {
        CallNumber: {
            callNumber: (success: ICallCallback, failure: ICallCallback, number: string | number, bypassAppChooser?: boolean) => any
        }
    }
}