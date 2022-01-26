/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import tw, { TwStyle } from 'twin.macro';

type ButtonVariant = 'default' | 'primary';
type ButtonSize = 'sm' | 'lg';
type ButtonBorder = 'rounded' | 'circle';

const variants: Record<ButtonVariant, TwStyle> = {
  default: tw`bg-gray-700 text-gray-600`,
  primary: tw`bg-primary`,
};

const sizes: Record<ButtonSize, TwStyle> = {
  sm: tw`w-[30px] h-[30px] text-base`,
  lg: tw`w-[50px] h-[50px] text-[36px]`,
};

const borders: Record<ButtonBorder, TwStyle> = {
  rounded: tw`rounded-[calc(100%/3)]`,
  circle: tw`w-[50px] h-[50px] rounded-full`,
};

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: EmotionJSX.Element;
  variant?: ButtonVariant;
  size?: ButtonSize;
  border?: ButtonBorder;
}

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { icon, variant, size, border, onClick, ...rest } = props;

  return (
    <button
      css={[
        tw`flex justify-center items-center`,
        variants[variant as ButtonVariant],
        sizes[size as ButtonSize],
        borders[border as ButtonBorder],
      ]}
      {...{ onClick }}
      {...rest}
    >
      {icon}
    </button>
  );
};

ButtonIcon.defaultProps = {
  variant: 'default',
  size: 'sm',
  border: 'rounded',
};

export default ButtonIcon;
