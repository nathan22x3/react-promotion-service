/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import tw, { TwStyle } from 'twin.macro';

type ButtonVariant = 'primary' | 'stroke';

const variants: Record<ButtonVariant, TwStyle> = {
  primary: tw`px-5 bg-gray-700`,
  stroke: tw`border-2 border-primary bg-transparent`,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: EmotionJSX.Element;
  variant?: ButtonVariant;
}

const Button = ({ label, icon, variant = 'primary', onClick, ...rest }: ButtonProps) => {
  return (
    <button
      css={[
        tw`flex justify-center items-center gap-x-1 rounded-[15px] p-[15px] duration-200 hover:bg-primary`,
        variants[variant],
      ]}
      {...{ onClick }}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
