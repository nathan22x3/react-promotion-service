import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
/** @jsxImportSource @emotion/react */
// import tw from 'twin.macro';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: EmotionJSX.Element;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, icon, onClick } = props;

  return (
    <button {...{ onClick }}>
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

Button.defaultProps = {};

export default Button;
