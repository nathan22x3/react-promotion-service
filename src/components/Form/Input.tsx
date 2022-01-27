/** @jsxImportSource @emotion/react */
import React from 'react';
import tw from 'twin.macro';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div>
      <label css={tw`block text-gray-500 mb-2.5`} htmlFor={id}>
        {label}
      </label>
      <input css={tw`py-[15px] border-none rounded-[15px] bg-gray-700 px-5`} {...rest} />
    </div>
  );
};

export default Input;
