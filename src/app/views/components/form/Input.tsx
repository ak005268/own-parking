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

    // document.addEventListener('mousewheel', function(event) {
    //     if (window?.document.activeElement.type === 'number') {
    //         event.preventDefault();
    //     }
    // });

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
                {...register(name, rules)}
                type={type}
                id={label}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                onWheel={event => { event.preventDefault(); }}
                inputMode={type === 'number' ? 'text' : undefined}
            />

            <p className='text-red-500 text-[10px] lg:text-xs'>{errors}</p>

        </div>
    );
};

export default Input;
