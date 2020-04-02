import Vue from 'vue';
import { File } from './model';
import '@/components/RichText/styles/antd.scss';
export default class Uploader extends Vue {
    private loading;
    private imageUrl;
    fileList: File[];
    callback?: Function;
    upload?: Function;
    accept?: string[];
    multiple?: boolean;
    readonly accepts: string;
    unploadFiles(option: any): Promise<void>;
    handleChange(info: any): void;
    beforeUpload(file: any): boolean;
    remove(): void;
}
