/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import tw from 'twin.macro';

interface NavbarItemProps {
  title: string;
  icon: EmotionJSX.Element;
  link: string;
}

const NavbarItem = ({ title, icon, link }: NavbarItemProps) => {
  const resolved = useResolvedPath(link);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={link}
      css={[
        tw`flex gap-x-2.5 items-center duration-200`,
        match ? tw`text-white` : tw`text-gray-500`,
      ]}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </Link>
  );
};

export default NavbarItem;
