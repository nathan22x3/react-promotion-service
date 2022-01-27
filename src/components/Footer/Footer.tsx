/** @jsxImportSource @emotion/react */
import { ReactComponent as TelegramIcon } from 'assets/svgs/telegram.svg';
import { ReactComponent as TwitterIcon } from 'assets/svgs/twitter.svg';
import { ReactComponent as VkIcon } from 'assets/svgs/vk.svg';
import tw from 'twin.macro';

const Footer = () => {
  return (
    <footer css={tw`font-medium bg-gray-800 text-gray-500`}>
      <div className="wrapper" css={tw`flex justify-between py-7  h-20`}>
        <div css={tw`flex gap-5`}>
          <TwitterIcon />
          <VkIcon />
          <TelegramIcon />
        </div>
        <p css={tw`text-lg`}>&copy; 2020 - All Rights Lecensed</p>
        <p css={tw`text-lg`}>For commercial inquiries</p>
      </div>
    </footer>
  );
};

export default Footer;
