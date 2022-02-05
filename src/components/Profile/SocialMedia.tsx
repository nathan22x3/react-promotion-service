/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ReactComponent as CheckIcon } from 'assets/svgs/check.svg';
import { ReactComponent as MoreIcon } from 'assets/svgs/more.svg';
import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import { ButtonIcon } from 'components';
import tw from 'twin.macro';

interface SocialMediaProps {
  name: string;
  icon: EmotionJSX.Element;
  isLoggedIn?: boolean;
}

const SocialMedia = ({ name, icon, isLoggedIn = false }: SocialMediaProps) => {
  return (
    <div css={tw`flex justify-between items-center px-3 py-2.5 rounded-[15px] bg-gray-800`}>
      <div css={tw`flex items-center gap-x-2.5`}>
        {icon}
        <p>{name}</p>
      </div>
      <div css={tw`flex items-center gap-x-2.5`}>
        {isLoggedIn ? (
          <>
            <ButtonIcon icon={<CheckIcon />} variant="success" size="sm" border="circle" />
            <MoreIcon />
          </>
        ) : (
          <ButtonIcon icon={<PlusIcon />} variant="primary" size="sm" border="circle" />
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
