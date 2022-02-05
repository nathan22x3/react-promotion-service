/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ReactComponent as CalendarIcon } from 'assets/svgs/calendar.svg';
import { ReactComponent as CoinIcon } from 'assets/svgs/coin.svg';
import { ReactComponent as HeartIcon } from 'assets/svgs/heart.svg';
import { ReactComponent as UserAddIcon } from 'assets/svgs/user-add.svg';
import tw, { TwStyle } from 'twin.macro';
import { currencyFormater } from 'utils/number';

const ITEMS: StatisticItem[] = [
  {
    amount: { value: 2562 },
    icon: {
      component: <HeartIcon />,
      style: tw`text-danger bg-danger-light`,
    },
    description: 'Likes delivered for all time',
  },
  {
    amount: { value: 15 },
    icon: {
      component: <UserAddIcon />,
      style: tw`text-secondary bg-secondary-light`,
    },
    description: 'New users invited',
  },
  {
    amount: { value: 329 },
    icon: {
      component: <CalendarIcon />,
      style: tw`text-success bg-success-light`,
    },
    description: 'Days since registration',
  },
  {
    amount: { value: 1456.23, locales: 'en-US', currency: 'USD' },
    icon: {
      component: <CoinIcon />,
      style: tw`text-warn bg-warn-light`,
    },
    description: 'Real money spent',
  },
];

interface StatisticItem {
  amount: { value: number; locales?: string | string[]; currency?: string };
  icon: {
    component: EmotionJSX.Element;
    style: TwStyle;
  };
  description: string;
}

type StatisticItemProps = StatisticItem;

const StatisticItem = ({ icon, amount, description }: StatisticItemProps) => {
  return (
    <div css={tw`flex gap-x-5 p-5 rounded-[15px] bg-gray-800`}>
      <div css={[tw`p-[13px] rounded-xl`, icon.style]}>{icon.component}</div>
      <div css={tw`flex flex-col justify-between`}>
        <p css={tw`text-xl font-medium`}>
          {amount.currency
            ? currencyFormater(amount.value, amount.locales, amount.currency)
            : amount.value}
        </p>
        <p css={tw`text-gray-500`}>{description}</p>
      </div>
    </div>
  );
};

const Statistic = () => {
  return (
    <div css={tw`space-y-5`}>
      {ITEMS.map((item, index) => (
        <StatisticItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Statistic;
