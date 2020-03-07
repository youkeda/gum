declare function showMessage({ confirm, message, iconUrl, type, duration }: {
    message: string;
    type: string;
    duration: number;
    iconUrl?: string;
    confirm?: Function;
}): void;
export default showMessage;
