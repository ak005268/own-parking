import { FC } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  name: string;
  placeholder?: string;
  errors?: any ;
  disabled?: boolean;
  register: any;
  rules?:any;
}

const Input: FC<InputProps> = ({
    type,
    register,
    rules,
    label,
    name,
    placeholder,
    errors,
    disabled = false,
}) => {


    return (
        <div className="input-wrapper">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={label}
            >
                {label}
            </label>
            <input
                className="w-full px-3 py-1 border rounded focus:outline-none focus:border-blue-500 leading-7"
                {...register(name, rules)}
                type={type}
                id={label}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                inputMode={type === 'number' ? 'text' : undefined}
            />

            <p className='text-color-red text-[10px] lg:text-xs'>{errors}</p>

        </div>
    );
};

export default Input;
