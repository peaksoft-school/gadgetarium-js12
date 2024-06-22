import { IconPhotoScan } from '@tabler/icons-react';
import { ChangeEvent, useRef } from 'react';
import scss from './CustomImageAdd.module.scss';

type CustomImageAddProps = {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

const CustomImageAdd: React.FC<CustomImageAddProps> = ({ image, setImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
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
