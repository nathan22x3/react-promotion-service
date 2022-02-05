/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ButtonHTMLAttributes } from 'react';
import tw, { TwStyle } from 'twin.macro';

type ButtonVariant = 'primary' | 'stroke';

const variants: Record<ButtonVariant, TwStyle> = {
  primary: tw`px-5 bg-gray-700`,
  stroke: tw`border-2 border-primary bg-transparent`,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: EmotionJSX.Element;
  variant?: ButtonVariant;
  customStyle?: TwStyle;
}

const Button = ({ label, icon, variant = 'primary', customStyle: style, ...rest }: ButtonProps) => {
  return (
    <button
      css={[
        tw`flex justify-center items-center gap-x-1 rounded-[15px] p-[15px] duration-200 hover:bg-primary`,
        variants[variant],
        style,
      ]}
      {...rest}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
