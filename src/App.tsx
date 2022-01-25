import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div css={tw`text-2xl`}>
      <p>Hello</p>
    </div>
  );
};

App.defaultProps = {};

export default App;
