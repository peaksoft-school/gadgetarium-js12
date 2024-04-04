import scss from "./CustomInput.module.scss"

type CustomInputProps = {
  placeholder?: string;
  width?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const CustomInput = ({ placeholder, type, value, onChange, width}: CustomInputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={scss.custom_input}
        style={{ width }}
      />
    </div>
  )
}

export default CustomInput