/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ButtonHTMLAttributes } from 'react';
import tw, { TwStyle } from 'twin.macro';

type ButtonVariant = 'default' | 'primary' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonBorder = 'rounded' | 'circle';

const variants: Record<ButtonVariant, TwStyle> = {
  default: tw`bg-gray-700 text-gray-600`,
  primary: tw`bg-primary`,
  success: tw`bg-success`,
};

const sizes: Record<ButtonSize, TwStyle> = {
  sm: tw`w-5 h-5 text-base`,
  md: tw`w-[30px] h-[30px] text-base`,
  lg: tw`w-[50px] h-[50px] text-[36px]`,
};

const borders: Record<ButtonBorder, TwStyle> = {
  rounded: tw`rounded-[calc(100%/3)]`,
  circle: tw`rounded-full`,
};

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: EmotionJSX.Element;
  variant?: ButtonVariant;
  size?: ButtonSize;
  border?: ButtonBorder;
}

const ButtonIcon = ({
  icon,
  variant = 'default',
  size = 'md',
  border = 'rounded',
  ...rest
}: ButtonIconProps) => {
  return (
    <button
      css={[tw`flex justify-center items-center`, variants[variant], sizes[size], borders[border]]}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
