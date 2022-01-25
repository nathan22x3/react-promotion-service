import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: EmotionJSX.Element;
}

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { icon, onClick, ...rest } = props;

  return (
    <button css={tw`p-[7px] rounded-[10px] bg-primary text-base`} {...{ onClick }} {...rest}>
      {icon}
    </button>
  );
};

ButtonIcon.defaultProps = {};

export default ButtonIcon;
