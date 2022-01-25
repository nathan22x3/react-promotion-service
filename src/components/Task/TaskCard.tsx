/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ReactComponent as CommentsIcon } from 'assets/svgs/comments.svg';
import { ReactComponent as FollowersIcon } from 'assets/svgs/followers.svg';
import { ReactComponent as LikeIcon } from 'assets/svgs/like.svg';
import { ReactComponent as ViewsIcon } from 'assets/svgs/views.svg';
import { ReactComponent as MoreIcon } from 'assets/svgs/more.svg';
import { Button } from 'components';

import React from 'react';
import tw from 'twin.macro';

interface TaskCardProps {
  name: string;
  type: TaskType;
  avatar: any;
  image: string;
}

type TaskType = 'like' | 'comment' | 'views' | 'followers';

const icons: Record<TaskType, EmotionJSX.Element> = {
  like: <LikeIcon />,
  comment: <CommentsIcon />,
  followers: <FollowersIcon />,
  views: <ViewsIcon />,
};

const TaskCard: React.FunctionComponent<TaskCardProps> = (props) => {
  const { name, type, avatar, image } = props;

  return (
    <div css={tw`flex flex-col max-w-[290px] p-5 rounded-[15px] bg-gray-800 gap-y-5`}>
      <div css={tw`flex justify-between`}>
        <div css={tw`flex items-center gap-x-2.5`}>
          <div css={tw`relative w-[50px] h-[50px]`}>
            <img css={tw`w-full h-full`} src={avatar} />
            <span css={tw`absolute bottom-0 right-0`}>{icons[type as TaskType]}</span>
          </div>
          <div>
            <p>{name}</p>
            <small css={tw`capitalize`}>{type}</small>
          </div>
        </div>
        <MoreIcon css={tw`mt-[5px]`} />
      </div>
      <img css={tw`w-full h-auto rounded-[15px]`} src={image} />
      <Button label="Perform a task" />
    </div>
  );
};

TaskCard.defaultProps = {};

export default TaskCard;
