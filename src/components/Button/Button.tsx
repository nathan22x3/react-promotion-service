import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw, { TwStyle } from 'twin.macro';

type ButtonVariant = 'filled' | 'stroke';

const variants: Record<ButtonVariant, TwStyle> = {
  filled: tw`px-5 bg-gray-700`,
  stroke: tw`border-2 border-primary bg-transparent`,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: EmotionJSX.Element;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, icon, variant, onClick, ...rest } = props;

  return (
    <button
      css={[
        tw`flex justify-center items-center gap-x-1 rounded-[15px] p-[15px] duration-200 hover:bg-primary`,
        variants[variant as ButtonVariant],
      ]}
      {...{ onClick }}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

Button.defaultProps = {
  variant: 'stroke',
};

export default Button;
