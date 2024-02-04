import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  name: string;
  placeholder?: string;
  errors?: any ;
  disabled?: boolean;
  register: any;
}

const Input: FC<InputProps> = ({
    type,
    register,
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
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                {...register(name, { required: 'This is required.' })}
                type={type}
                id={label}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
            />
            <p className='text-red-500'>{errors}</p>

        </div>
    );
};

export default Input;
