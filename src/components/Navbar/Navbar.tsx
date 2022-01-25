import { ReactComponent as FaqIcon } from 'assets/svgs/faq.svg';
import { ReactComponent as GlobeIcon } from 'assets/svgs/globe.svg';
import { ReactComponent as GridIcon } from 'assets/svgs/grid.svg';
import { ReactComponent as LogoText } from 'assets/svgs/logo-text.svg';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { NavbarItem, NavbarUser } from '.';

const items = [
  {
    title: 'Task list',
    icon: <GridIcon />,
    link: '/task',
  },
  {
    title: 'News',
    icon: <GlobeIcon />,
    link: '/news',
  },
  {
    title: 'Help',
    icon: <FaqIcon />,
    link: '/help',
  },
];

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav css={tw`bg-gray-800`}>
      <div css={tw`flex justify-between items-center max-w-screen-2xl h-20 px-28 mx-auto`}>
        <a href="/" css={tw`flex items-center`}>
          <LogoText />
        </a>
        <div css={tw`flex gap-x-10`}>
          {items.map(({ title, icon, link }) => {
            return <NavbarItem key={title} {...{ title, icon, link }} />;
          })}
        </div>
        <NavbarUser />
      </div>
    </nav>
  );
};

Navbar.defaultProps = {};

export default Navbar;
