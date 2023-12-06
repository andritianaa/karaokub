import React from 'react';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  className?: string;
  type: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  className,
  type
}) => {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id="first_name"
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9c2fea] block w-full p-2.5 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
