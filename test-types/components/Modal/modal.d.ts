declare function showConfirm({ title, cancel, desc, confirm, cancelTxt, confirmTxt }: {
    title: string;
    desc: string;
    cancel?: Function;
    confirm?: Function;
    cancelTxt?: string;
    confirmTxt?: string;
}): void;
export default showConfirm;
