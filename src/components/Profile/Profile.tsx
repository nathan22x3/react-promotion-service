/** @jsxImportSource @emotion/react */
import { ReactComponent as FacebookIcon } from 'assets/svgs/facebook-filled.svg';
import { ReactComponent as TwitterIcon } from 'assets/svgs/twitter-filled.svg';
import { ReactComponent as VkIcon } from 'assets/svgs/vk-filled.svg';
import { Button, Container, Input } from 'components';
import tw from 'twin.macro';
import { AvatarUploader, SocialMedia } from '.';

const SOCIAL_MEDIA_ACCOUNTS = [
  { name: 'Facebook', icon: <FacebookIcon />, isLoggedIn: false },
  { name: 'Twitter', icon: <TwitterIcon />, isLoggedIn: true },
  { name: 'VKontakte', icon: <VkIcon />, isLoggedIn: true },
];

const Profile = () => {
  return (
    <Container title="Profile">
      <div css={tw`flex gap-x-20`}>
        <div css={tw`flex-1 flex flex-col gap-y-[50px]`}>
          <AvatarUploader />
          <div>
            <p css={tw`font-medium text-gray-500 mb-2.5`}>Social media</p>
            <div css={tw`flex flex-col gap-y-5`}>
              {SOCIAL_MEDIA_ACCOUNTS.map((item) => (
                <SocialMedia key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div css={tw`flex flex-col gap-y-5 w-[430px]`}>
          <Input
            label="Dribbble Link"
            id="dribbble"
            value="https://dribbble.com/alexander-herzog"
            placeholder="Enter Dribbble link"
          />
          <Input
            label="Behance Link"
            id="behance"
            value="https://www.behance.net/dukebafor"
            placeholder="Enter Behance link"
          />
          <div css={tw`my-5`}>
            <Input
              label="E-Mail"
              id="email"
              value="alexandr.herzog@gmail.com"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <p css={tw`font-medium text-gray-500 mb-2.5`}>Password management</p>
            <div css={tw`flex flex-col gap-y-5`}>
              <Input
                label="Primary password"
                type="password"
                id="password"
                value="bachletantien"
                placeholder="Enter password"
              />
              <Input
                label="New password"
                type="password"
                id="newPassword"
                value="nguyenthinam"
                placeholder="Enter new password"
              />
              <Input
                label="Confirm new password"
                type="password"
                id="confirm"
                value="hoangthuybede"
                placeholder="Enter password again"
              />
            </div>
          </div>
          <div css={tw`self-start mt-5`}>
            <Button label="Save changes" variant="stroke" />
          </div>
        </div>
        <div css={tw`flex-1`}></div>
      </div>
    </Container>
  );
};

export default Profile;
