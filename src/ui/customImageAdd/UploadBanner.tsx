import React from 'react';
import { Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';

type UploadBannerProps = {
  fileList: UploadFile[];
  setFileList: React.Dispatch<React.SetStateAction<UploadFile[]>>;
};

const UploadBanner: React.FC<UploadBannerProps> = ({ fileList, setFileList }) => {

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <Upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      {fileList.length < 6 && '+ Upload'}
    </Upload>
  );
};

export default UploadBanner;
