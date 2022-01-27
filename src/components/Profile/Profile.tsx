/** @jsxImportSource @emotion/react */
import { Button, Container, Input } from 'components';
import tw from 'twin.macro';

const Profile = () => {
  return (
    <Container title="Profile">
      <div css={tw`grid grid-cols-3 gap-y-20 mb-20`}>
        <div></div>
        <div css={tw`flex flex-col gap-y-5`}>
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
            <p css={tw`font-medium  text-gray-500 mb-2.5`}>Password management</p>
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
        <div></div>
      </div>
    </Container>
  );
};

export default Profile;
