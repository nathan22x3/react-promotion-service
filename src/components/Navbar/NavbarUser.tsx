/** @jsxImportSource @emotion/react */
import avatarDefault from 'assets/images/avatar-default.png';
import { ReactComponent as ArrowDownIcon } from 'assets/svgs/arrow-down.svg';
import { ReactComponent as CoinStackIcon } from 'assets/svgs/coin-stack.svg';
import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import { ButtonIcon } from 'components';
import React from 'react';
import tw from 'twin.macro';

interface NavbarUserProps {}

const NavbarUser: React.FC<NavbarUserProps> = () => {
  return (
    <div css={tw`flex gap-x-2.5`}>
      <div css={tw`flex items-center gap-x-5 p-1.5 rounded-[15px] bg-gray-700`}>
        <ButtonIcon icon={<PlusIcon />} variant="primary" />
        <div css={tw`flex items-center gap-x-[5px]`}>
          <CoinStackIcon />
          <span css={tw`min-w-[6ch]`}>2023</span>
        </div>
      </div>
      <div css={tw`flex items-center gap-x-2.5`}>
        <img src={avatarDefault} alt="avatar" css={tw`w-10 h-auto`} />
        <ArrowDownIcon css={tw`text-gray-500`} />
      </div>
    </div>
  );
};

NavbarUser.defaultProps = {};

export default NavbarUser;
