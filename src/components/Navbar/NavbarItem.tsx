import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

interface NavbarItemProps {
  title: string;
  icon: EmotionJSX.Element;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  const { title, icon, link } = props;

  return (
    <a href={link} css={tw`flex gap-x-2.5 items-center text-gray-500`}>
      <span>{icon}</span>
      <span>{title}</span>
    </a>
  );
};

NavbarItem.defaultProps = {};

export default NavbarItem;
