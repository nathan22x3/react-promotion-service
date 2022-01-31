/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div css={tw`flex flex-col gap-y-2.5`}>
      <label css={tw`block text-gray-500`} htmlFor={id}>
        {label}
      </label>
      <input css={tw`py-[15px] border-none rounded-[15px] bg-gray-700 px-5`} {...rest} />
    </div>
  );
};

export default Input;
