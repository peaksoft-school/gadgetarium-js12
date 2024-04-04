import scss from "./CustomErrorInput.module.scss"

type CustomErrorInputProps = {
  placeholder?: string;
  width?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const CustomErrorInput = ({placeholder, width, value, onChange, type}: CustomErrorInputProps) => {
  return (
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{ width }}
    className={scss.custom_input_error}
    />
  )
}

export default CustomErrorInput