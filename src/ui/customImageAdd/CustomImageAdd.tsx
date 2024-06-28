import { IconPhotoScan } from '@tabler/icons-react';
// import React, { ChangeEvent } from 'react';
import scss from './CustomImageAdd.module.scss';
import { usePostUploadMutation } from '@/src/redux/api/pdf';
import React from 'react';

type CustomImageAddProps = {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

const CustomImageAdd: React.FC<CustomImageAddProps> = ({ image, setImage }) => {
  const [postUploadApi] = usePostUploadMutation();

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   if (e.target) {
      //     setImage(e.target.result as string);
      //   }
      // };
      // reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('files', file[0]);
      try {
        const response = await postUploadApi(formData).unwrap();
        setImage(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className={scss.input_container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {image ? null : (
        <>
          <div className={scss.img_container} onClick={handleButtonClick}>
            <IconPhotoScan />
          </div>
        </>
      )}
      {image ? (
        <div className={scss.btn_container}>
          <button onClick={handleButtonClick}>Изменить</button>
          <button
            onClick={() => {
              setImage('');
            }}
          >
            Удалить
          </button>
        </div>
      ) : (
        <>
          <p>Нажмите на иконку чтобы загрузить или перетащите фото</p>
        </>
      )}
    </div>
  );
};

export default CustomImageAdd;
