/** @jsxImportSource @emotion/react */
import React from 'react';
import tw from 'twin.macro';
import { ReactComponent as ScrollToTopIcon } from 'assets/svgs/arrowhead-up.svg';
import { ButtonIcon } from 'components';

interface ContainerProps {
  title: string;
  right?: React.ReactElement;
  children: React.ReactNode;
}

const Container = ({ title, right, children }: ContainerProps) => {
  return (
    <main className="wrapper" css={tw`flex flex-col gap-y-10 relative my-10`}>
      <div css={tw`flex justify-between items-center h-[50px] max-h-[50px]`}>
        <h1>{title}</h1>
        {right}
      </div>
      {children}
      <div css={tw`self-end sticky bottom-16 z-50`}>
        <ButtonIcon icon={<ScrollToTopIcon />} size="lg" border="circle" />
      </div>
    </main>
  );
};

export default Container;
