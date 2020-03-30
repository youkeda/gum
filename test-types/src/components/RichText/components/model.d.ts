export interface File {
    name: string;
    url: string;
}
export interface UploadOption {
    onProgress?: (val: number) => void;
    onSuccess?: (result: File) => void;
    onFailed?: () => void;
}
