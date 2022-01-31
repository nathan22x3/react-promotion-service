/** @jsxImportSource @emotion/react */
import avatarDefault from 'assets/images/avatar-default.png';
import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import { Button } from 'components';
import { ChangeEvent, useRef, useState } from 'react';
import tw from 'twin.macro';

const AvatarUploader = () => {
  const [previewAvatar, setPreviewAvatar] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // TODO: impelement upload avatar handler
    const file = target.files?.[0];
    if (!file?.type.startsWith('image')) return;
    setPreviewAvatar(URL.createObjectURL(file));
  };

  return (
    <div css={tw`flex flex-col gap-y-5 p-5 rounded-[15px] bg-gray-800`}>
      <img
        src={previewAvatar || avatarDefault}
        alt="Avatar"
        className="aspect-square"
        css={tw`rounded-[15px] object-contain bg-gray-700`}
        draggable={false}
        loading="lazy"
      />
      <Button
        label="Upload new photo"
        icon={<PlusIcon />}
        variant="stroke"
        customStyle={tw`border-gray-700 hover:border-primary`}
        onClick={() => ref.current?.click()}
      />
      <input type="file" accept="image/*" css={tw`sr-only`} {...{ ref, onChange }} />
    </div>
  );
};

export default AvatarUploader;
