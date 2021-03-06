/** @jsxImportSource @emotion/react */
import { ReactComponent as FaqIcon } from 'assets/svgs/faq.svg';
import { ReactComponent as GlobeIcon } from 'assets/svgs/globe.svg';
import { ReactComponent as GridIcon } from 'assets/svgs/grid.svg';
import { ReactComponent as LogoText } from 'assets/svgs/logo-text.svg';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { NavbarItem, NavbarUser } from '.';

const items = [
  {
    title: 'Task list',
    icon: <GridIcon />,
    link: '/',
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

const Navbar = () => {
  return (
    <nav css={tw`bg-gray-800`}>
      <div className="wrapper" css={tw`flex justify-between items-center h-20`}>
        <Link to="/" css={tw`flex items-center`}>
          <LogoText />
        </Link>
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

export default Navbar;
