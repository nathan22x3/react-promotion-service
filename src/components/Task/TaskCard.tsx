/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ReactComponent as CommentsIcon } from 'assets/svgs/comments.svg';
import { ReactComponent as FollowersIcon } from 'assets/svgs/followers.svg';
import { ReactComponent as LikeIcon } from 'assets/svgs/like.svg';
import { ReactComponent as MoreIcon } from 'assets/svgs/more.svg';
import { ReactComponent as ViewsIcon } from 'assets/svgs/views.svg';
import { Button } from 'components';
import tw from 'twin.macro';

export interface Task {
  name: string;
  type: TaskType;
  avatar: string;
  image: string;
}

type TaskCardProps = Task;

type TaskType = 'like' | 'comment' | 'views' | 'followers';

const icons: Record<TaskType, EmotionJSX.Element> = {
  like: <LikeIcon />,
  comment: <CommentsIcon />,
  followers: <FollowersIcon />,
  views: <ViewsIcon />,
};

const TaskCard = ({ name, type, avatar, image }: TaskCardProps) => {
  return (
    <div
      className="hover:shadow hover:shadow-dark"
      css={tw`flex flex-col max-w-[290px] p-5 rounded-[15px] bg-gray-800 gap-y-5 duration-200 hover:(z-10 scale-[1.2] rotate-[-5deg])`}
    >
      <div css={tw`flex justify-between`}>
        <div css={tw`flex items-center gap-x-2.5`}>
          <div css={tw`relative w-[50px] h-[50px]`}>
            <img css={tw`w-full h-full rounded-full`} src={avatar} />
            <span css={tw`absolute bottom-0 right-0`}>{icons[type]}</span>
          </div>
          <div>
            <p>{name}</p>
            <small css={tw`capitalize`}>{type}</small>
          </div>
        </div>
        <MoreIcon css={tw`mt-[5px]`} />
      </div>
      <img css={tw`w-full h-auto rounded-[15px]`} src={image} draggable={false} loading="lazy" />
      <Button label="Perform a task" />
    </div>
  );
};

export default TaskCard;
