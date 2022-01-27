/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import tw from 'twin.macro';

interface NavbarItemProps {
  title: string;
  icon: EmotionJSX.Element;
  link: string;
}

const NavbarItem = ({ title, icon, link }: NavbarItemProps) => {
  return (
    <a href={link} css={tw`flex gap-x-2.5 items-center text-gray-500`}>
      <span>{icon}</span>
      <span>{title}</span>
    </a>
  );
};

export default NavbarItem;
