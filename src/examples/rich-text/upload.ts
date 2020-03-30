import { File, UploadOption } from '@/components/RichText/components/model';

const bucket: string = 'qgt-upload';
const region: string = 'oss-cn-hangzhou';

export default async function uploadFile(file: any, option?: UploadOption) {
  const name = `upload/chat_1585555389298.png`;
  const url = `https://${bucket}.${region}.aliyuncs.com/${name}`;
  const uploadFile: File = { name: name, url: url };

  const res = {
    res: {
      status: 200,
      statusCode: 200,
      headers: {
        'content-length': '0',
        etag: 'B6A4590F180B9C7BF017504051EFAF69',
        'x-oss-request-id': '5E81A7BDF1BF4B3737BC3F9C'
      },
      size: 0,
      aborted: false,
      rt: 313,
      keepAliveSocket: false,
      data: [],
      requestUrls: [
        'http://qgt-upload.oss-cn-hangzhou.aliyuncs.com/upload/chat_1585555389298.png'
      ],
      timing: null,
      remoteAddress: '',
      remotePort: ''
    },
    bucket: 'qgt-upload',
    name: 'upload/chat_1585555389298.png',
    etag: 'B6A4590F180B9C7BF017504051EFAF69'
  };

  // option && option.onSuccess && option.onSuccess(res);
  option && option.onSuccess && option.onSuccess(uploadFile);
}
